module.exports = {
    findBy: async function (query, limit, skip) {
        try {
            if (!skip) skip = 0;
    
            if (!limit) limit = 10;
    
            if (typeof (skip) === 'string') skip = parseInt(skip);
    
            if (typeof (limit) === 'string') limit = parseInt(limit);
    
            if (!query) query = {};
    
            if(!query.deleted) query.deleted = false;
            var schedules = await ScheduleModel.find(query)
                .sort([['createdAt', -1]])
                .limit(limit)
                .skip(skip)
                .populate('userIds', 'name')
                .populate('createdById', 'name')
                .populate('monitorIds', 'name')
                .populate('projectId', 'name')
                .populate({
                    path: 'escalationIds',
                    select: 'teamMember',
                    populate: {path:'teamMember.member',select:'name'}
                });
            return schedules;
        } catch (error) {
            ErrorService.log('ScheduleModel.find', error);
            throw error;
        }
    },

    findOneBy: async function (query) {
        try {
            if (!query) {
                query = {};
            }
    
            if(!query.deleted) query.deleted = false;
            var schedule = await ScheduleModel.findOne(query)
                .sort([['createdAt', -1]])
                .populate('userIds', 'name')
                .populate('createdById', 'name')
                .populate('monitorIds', 'name')
                .populate('projectId', 'name')
                .populate({
                    path: 'escalationIds',
                    select: 'teamMember',
                    populate: {path:'teamMember.member',select:'name'}
                });
            return schedule;
        } catch (error) {
            ErrorService.log('ScheduleService.findOne', error);
            throw error;
        }
    },

    create: async function (data) {        
        try {
            var scheduleModel = new ScheduleModel();
            scheduleModel.name = data.name || null;
            scheduleModel.projectId = data.projectId || null;
            scheduleModel.createdById = data.createdById || null;
    
            // if userIds is array
            if (data.userIds) {
                scheduleModel.userIds = [];
                for (let userId of data.userIds) {
                    scheduleModel.userIds.push(userId);
                }
            }
    
            // if monitorIds is array
            if (data.monitorIds) {
                scheduleModel.monitorIds = [];
                for (let monitorId of data.monitorIds) {
                    scheduleModel.userIds.push(monitorId);
                }
            }
            var schedule = await scheduleModel.save();
            return schedule;
        } catch (error) {
            ErrorService.log('ScheduleService.create', error);
            throw error;
        }
    },

    countBy: async function (query) {
        try {
            if (!query) {
                query = {};
            }
    
            if(!query.deleted) query.deleted = false;
            var count = await ScheduleModel.count(query);
            return count;
        } catch (error) {
            ErrorService.log('ScheduleService.countBy', error);
            throw error;
        }
    },

    deleteBy: async function (query, userId) {
        try {
            var schedule = await ScheduleModel.findOneAndUpdate(query, {
                $set: {
                    deleted: true,
                    deletedById: userId,
                    deletedAt: Date.now()
                }
            }, {
                new: true
            });
  
            if (schedule && schedule._id) {
                var escalations = await EscalationService.findBy({ scheduleId: schedule._id });
                await escalations.map(({ _id }) => EscalationService.deleteBy({ _id: _id }, userId));
            }
  
            return schedule;
        } catch (error) {
            ErrorService.log('ScheduleService.deleteBy', error);
            throw error;
        }
    },

    removeMonitor: async function (monitorId) {
        try {
            var schedule = await ScheduleModel.findOneAndUpdate({monitorIds:monitorId}, {
                $pull: {monitorIds: monitorId}
            });
            return schedule;
        } catch (error) {
            ErrorService.log('ScheduleService.removeMonitor', error);
            throw error;
        }
    },

    update: async function (data) {
        try {
            var _this = this;
            if (!data._id) {
                let schedule = await _this.create(data);
                return schedule;
            } else {
                var schedule = await _this.findOneBy({ _id: data._id, deleted: { $ne: null } });
                
                var name = data.name || schedule.name;
                var projectId = data.projectId || schedule.projectId;
                var createdById = data.createdById || schedule.createdById;
                var userIds = [];
                if (data.userIds) {
                    for (let userId of data.userIds) {
                        userIds.push(userId);
                    }
                }
                else {
                    userIds = schedule.userIds;
                }
                var monitorIds = [];
                if (data.monitorIds) {
                    for (let monitorId of data.monitorIds) {
                        monitorIds.push(monitorId);
                    }
                }
                else {
                    monitorIds = schedule.monitorIds;
                }
                var escalationIds = data.escalationIds || schedule.escalationIds;
                
                schedule = await ScheduleModel.findByIdAndUpdate(data._id, {
                    $set: {
                        name: name,
                        projectId: projectId,
                        createdById: createdById,
                        userIds: userIds,
                        monitorIds: monitorIds,
                        escalationIds: escalationIds,
                        createdAt: Date.now(),
                    }
                }, {
                    new: true
                });
                
                schedule = await _this.findBy({ _id: data._id }, 10, 0);
                
                return schedule;
            }
        } catch (error) {
            ErrorService.log('ScheduleService.update', error);
            throw error;
        }
    },

    saveSchedule: async function (schedule) {
        try {
            schedule = await schedule.save();
            return schedule;
        } catch (error) {
            ErrorService.log('schedule.save', error);
            throw error;
        }
    },

    deleteMonitor: async function (monitorId) {
        try{
            await ScheduleModel.update({ deleted: false }, { $pull: { monitorIds: monitorId } });
        }catch(error){
            ErrorService.log('ScheduleModel.update', error);
            throw error;
        }
    },

    addEscalation: async function (scheduleId, escalationData, userId) {
        try {
            let _this = this;
            let escalationIds = [];
            for (let data of escalationData) {
                var escalation = await EscalationService.update(data);
                escalationIds.push(escalation._id);
            }
    
            if (escalationIds && escalationIds.length) {
                await _this.escalationCheck(escalationIds, scheduleId, userId);
            }
    
            await _this.update({ _id: scheduleId, escalationIds: escalationIds });
            var escalations = await _this.getEscalation(scheduleId);

            return escalations.escalations;
        } catch (error) {
            ErrorService.log('ScheduleService.addEscalation', error);
            throw error;
        }
    },

    getEscalation: async function (scheduleId) {
        try {
            let _this = this;
            var schedule = await _this.findOneBy({ _id: scheduleId });
  
            let escalationIds = schedule.escalationIds;
            let escalations = await Promise.all(escalationIds.map(async (escalationId) => {
                return await EscalationService.findOneBy({ _id: escalationId._id });
            }));
            return { escalations, count: escalationIds.length };
        } catch (error) {
            ErrorService.log('ScheduleService.getEscalation', error);
            throw error;
        }
    },

    escalationCheck: async function (escalationIds, scheduleId, userId) {
        try {
            let _this = this;
            var scheduleIds = await _this.findOneBy({ _id: scheduleId });
  
            scheduleIds = scheduleIds.escalationIds.map(i => i._id.toString());
            escalationIds = escalationIds.map(i => i.toString());
    
            scheduleIds.map(async (id) => {
                if (escalationIds.indexOf(id) < 0) {
                    await EscalationService.deleteBy({ _id: id }, userId);
                }
            });
        } catch (error) {
            ErrorService.log('ScheduleService.escalationCheck', error);
            throw error;
        }
    },

    deleteEscalation: async function (escalationId) {
        try{
            await ScheduleModel.update({ deleted: false }, { $pull: { escalationIds: escalationId } });
        }catch(error){
            ErrorService.log('ScheduleService.update', error);
            throw error;
        }
    },

    getSubProjectSchedules: async function(subProjectIds){
        var _this = this;
        let subProjectSchedules = await Promise.all(subProjectIds.map(async (id)=>{
            let schedules = await _this.findBy({projectId: id}, 10, 0);
            let count = await _this.countBy({projectId: id});
            return {schedules, count, _id: id, skip: 0, limit: 10};
        }));
        return subProjectSchedules;
    },

    hardDeleteBy: async function (query) {
        try {
            await ScheduleModel.deleteMany(query);
            return 'Schedule(s) removed successfully';
        } catch(error) {
            ErrorService.log('ScheduleService.hardDeleteBy', error);
            throw error;
        }
    },

    restoreBy: async function (query) {
        const _this = this;
        query.deleted = true;
        let schedule = await _this.findBy(query);
        if(schedule && schedule.length > 1){
            const schedules = await Promise.all(schedule.map(async (schedule) => {
                const scheduleId = schedule._id;
                schedule = await _this.update({_id: scheduleId, deleted: true}, {
                    deleted: false,
                    deletedAt: null,
                    deleteBy: null
                });
                await EscalationService.restoreBy({scheduleId, deleted: true});
                return schedule;
            }));
            return schedules;
        }else{
            schedule = schedule[0];
            if(schedule){
                const scheduleId = schedule._id;
                schedule = await _this.update({_id: scheduleId, deleted: true}, {
                    deleted: false,
                    deletedAt: null,
                    deleteBy: null
                });
                await EscalationService.restoreBy({scheduleId, deleted: true});
            }
            return schedule;
        }
    }
};

var ScheduleModel = require('../models/schedule');
let EscalationService = require('../services/escalationService');
let ErrorService = require('../services/errorService');
