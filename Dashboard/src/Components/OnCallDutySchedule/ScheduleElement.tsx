import Route from "Common/Types/API/Route";
import Link from "Common/UI/src/Components/Link/Link";
import OnCallDutySchedule from "Common/Models/DatabaseModels/OnCallDutyPolicySchedule";
import React, { FunctionComponent, ReactElement } from "react";

export interface ComponentProps {
  schedule: OnCallDutySchedule;
  onNavigateComplete?: (() => void) | undefined;
}

const OnCallDutyScheduleElement: FunctionComponent<ComponentProps> = (
  props: ComponentProps,
): ReactElement => {
  if (
    props.schedule._id &&
    (props.schedule.projectId ||
      (props.schedule.project && props.schedule.project._id))
  ) {
    const projectId: string | undefined = props.schedule.projectId
      ? props.schedule.projectId.toString()
      : props.schedule.project
        ? props.schedule.project._id
        : "";
    return (
      <Link
        onNavigateComplete={props.onNavigateComplete}
        className="hover:underline"
        to={
          new Route(
            `/dashboard/${projectId?.toString()}/on-call-duty/schedules/${props.schedule._id.toString()}`,
          )
        }
      >
        <span>{props.schedule.name}</span>
      </Link>
    );
  }

  return <span>{props.schedule.name}</span>;
};

export default OnCallDutyScheduleElement;
