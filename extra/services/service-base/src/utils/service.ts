import { IEndpointsBuilder, IServiceOptions } from '../types';
import ping from '../endpoints/endpoints.ping';
import me from '../endpoints/endpoints.me';
import authorize from '../endpoints/endpoints.authorize';
import token from '../endpoints/endpoints.token';

export const initService = (
    endpointsBuilder: IEndpointsBuilder,
    _options: IServiceOptions = {}
) => {
    endpointsBuilder.withRouter('/ping', ping);
    endpointsBuilder.withRouter('/me', me);
    endpointsBuilder.withRouter('/authorize', authorize);
    endpointsBuilder.withRouter('/token', token);
};
