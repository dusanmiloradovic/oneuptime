import PageComponentProps from "../../PageComponentProps";
import ObjectID from "Common/Types/ObjectID";
import Navigation from "Common/UI/src/Utils/Navigation";
import React, {
  Fragment,
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import IncidentsTable from "../../../Components/Incident/IncidentsTable";
import { PromiseVoidFunction } from "Common/Types/FunctionTypes";
import ModelAPI from "Common/UI/src/Utils/ModelAPI/ModelAPI";
import ListResult from "Common/UI/src/Utils/BaseDatabase/ListResult";
import { LIMIT_PER_PROJECT } from "Common/Types/Database/LimitMax";
import API from "Common/UI/src/Utils/API/API";
import ErrorMessage from "Common/UI/src/Components/ErrorMessage/ErrorMessage";
import PageLoader from "Common/UI/src/Components/Loader/PageLoader";
import ServiceCatalogMonitor from "Common/Models/DatabaseModels/ServiceCatalogMonitor";

const ServiceCatalogIncidents: FunctionComponent<
  PageComponentProps
> = (): ReactElement => {
  const modelId: ObjectID = Navigation.getLastParamAsObjectID(1);

  const [monitorIds, setMonitorIds] = useState<Array<ObjectID> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMonitorsInService: PromiseVoidFunction =
    async (): Promise<void> => {
      // Fetch MonitorStatus by ID
      try {
        setIsLoading(true);
        const serviceCatalogMonitors: ListResult<ServiceCatalogMonitor> =
          await ModelAPI.getList<ServiceCatalogMonitor>({
            modelType: ServiceCatalogMonitor,
            query: {
              serviceCatalogId: modelId,
            },
            select: {
              monitorId: true,
            },
            limit: LIMIT_PER_PROJECT,
            skip: 0,
            sort: {},
          });

        const monitorIds: ObjectID[] = serviceCatalogMonitors.data.map(
          (serviceCatalogMonitor: ServiceCatalogMonitor) => {
            return serviceCatalogMonitor.monitorId!;
          },
        );

        setMonitorIds(monitorIds);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(API.getFriendlyMessage(err));
      }
    };

  useEffect(() => {
    fetchMonitorsInService().catch((error: Error) => {
      setError(API.getFriendlyMessage(error));
    });
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading) {
    return <PageLoader isVisible={true} />;
  }

  return (
    <Fragment>
      <IncidentsTable
        query={{
          monitors: monitorIds,
        }}
        disableCreate={true}
        title={"Service Incidents"}
        description="List of incidents that belong to monitors in this service."
        noItemsMessage={"No incidents found for this service."}
      />
    </Fragment>
  );
};

export default ServiceCatalogIncidents;
