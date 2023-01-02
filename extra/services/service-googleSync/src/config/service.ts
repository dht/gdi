import { actions } from '../store/actions';
import { $serviceStatus } from '../store/selectors.base';

export const serviceConfig: IServiceConfig = {
    serviceId: 'googleSync',
    serviceName: 'Level Up',
    description: 'Level Up store',
    imageUrl: '',
    apiUrl: 'http://localhost:3020',
    $status: $serviceStatus,
    patchStatus: (serviceStatus: ServiceStatus) =>
        actions.appStateGoogleSync.patch({ serviceStatus }),
};
