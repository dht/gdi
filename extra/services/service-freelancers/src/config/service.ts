import { actions } from '../store/actions';
import { $serviceStatus } from '../store/selectors.base';

export const serviceConfig: IServiceConfig = {
    serviceId: 'freelancers',
    serviceName: 'Freelancers',
    description: 'Freelancers directory',
    imageUrl: '',
    apiUrl: 'http://localhost:3020',
    $status: $serviceStatus,
    patchStatus: (serviceStatus: ServiceStatus) =>
        actions.appStateFreelancer.patch({ serviceStatus }),
};
