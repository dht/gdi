import { actions } from '../store/actions';
import { $serviceStatus } from '../store/selectors.base';

export const serviceConfig: IServiceConfig = {
    serviceId: 'guidance',
    serviceName: 'Guidance',
    description: 'Guidance',
    imageUrl: '',
    apiUrl: 'http://localhost:3020',
    $status: $serviceStatus,
    patchStatus: (serviceStatus: ServiceStatus) => {
        return actions.appStateGuidance.patch({ serviceStatus });
    },
    connectRootNodes: ['requiredDomains', 'rankedDomains', 'requiredFeatures'],
};
