import DashboardNavigation from "../../Utils/Navigation";
import { RouteUtil } from "../../Utils/RouteMap";
import PageComponentProps from "../PageComponentProps";
import FormFieldSchemaType from "Common/UI/src/Components/Forms/Types/FormFieldSchemaType";
import ModelTable from "Common/UI/src/Components/ModelTable/ModelTable";
import FieldType from "Common/UI/src/Components/Types/FieldType";
import ScheduledMaintenanceNoteTemplate from "Common/Models/DatabaseModels/ScheduledMaintenanceNoteTemplate";
import React, { Fragment, FunctionComponent, ReactElement } from "react";

const ScheduledMaintenanceNoteTemplates: FunctionComponent<
  PageComponentProps
> = (props: PageComponentProps): ReactElement => {
  return (
    <Fragment>
      <ModelTable<ScheduledMaintenanceNoteTemplate>
        modelType={ScheduledMaintenanceNoteTemplate}
        id="incident-templates-table"
        name="Settings > Scheduled Maintenance Templates"
        isDeleteable={false}
        isEditable={false}
        isCreateable={true}
        isViewable={true}
        cardProps={{
          title:
            "Public or Private Note Templates for Scheduled Maintenance Events",
          description:
            "Here is a list of all the public and private note templates for scheduled maintenance.",
        }}
        noItemsMessage={"No note templates found."}
        query={{
          projectId: DashboardNavigation.getProjectId()?.toString(),
        }}
        showViewIdButton={true}
        formSteps={[
          {
            title: "Template Info",
            id: "template-info",
          },
          {
            title: "Note Details",
            id: "note-details",
          },
        ]}
        formFields={[
          {
            field: {
              templateName: true,
            },
            title: "Template Name",
            fieldType: FormFieldSchemaType.Text,
            stepId: "template-info",
            required: true,
            placeholder: "Template Name",
            validation: {
              minLength: 2,
            },
          },
          {
            field: {
              templateDescription: true,
            },
            title: "Template Description",
            fieldType: FormFieldSchemaType.LongText,
            stepId: "template-info",
            required: true,
            placeholder: "Template Description",
            validation: {
              minLength: 2,
            },
          },
          {
            field: {
              note: true,
            },
            title: "Public or Private note template.",
            fieldType: FormFieldSchemaType.Markdown,
            stepId: "note-details",
            required: true,
            validation: {
              minLength: 2,
            },
          },
        ]}
        showRefreshButton={true}
        viewPageRoute={RouteUtil.populateRouteParams(props.pageRoute)}
        filters={[
          {
            field: {
              templateName: true,
            },
            title: "Name",
            type: FieldType.Text,
          },
          {
            field: {
              templateDescription: true,
            },
            title: "Description",
            type: FieldType.Text,
          },
        ]}
        columns={[
          {
            field: {
              templateName: true,
            },
            title: "Name",
            type: FieldType.Text,
          },
          {
            field: {
              templateDescription: true,
            },
            title: "Description",
            type: FieldType.Text,
          },
        ]}
      />
    </Fragment>
  );
};

export default ScheduledMaintenanceNoteTemplates;
