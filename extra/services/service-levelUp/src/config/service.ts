import { actions } from '../store/actions';
import { $serviceStatus } from '../store/selectors.base';

export const serviceConfig: IServiceConfig = {
    serviceId: 'levelUp',
    serviceName: 'Level Up',
    description: 'Level Up store',
    imageUrl: '',
    apiUrl: 'http://localhost:3020',
    $status: $serviceStatus,
    patchStatus: (serviceStatus: ServiceStatus) =>
        actions.appStateLevelUp.patch({ serviceStatus }),
};
