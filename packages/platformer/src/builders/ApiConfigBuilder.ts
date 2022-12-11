import { ConnectionType, EndpointsConfigOverrides } from 'redux-connected';
import { IApiConfigBuilder } from '../types';

export class ApiConfigBuilder implements IApiConfigBuilder {
    private configOverrides: EndpointsConfigOverrides = {};

    withEndpointsConfigOverrides(overrides: EndpointsConfigOverrides = {}) {
        this.configOverrides = {
            ...this.configOverrides,
            ...overrides,
        };

        return this;
    }

    build(): EndpointsConfigOverrides {
        return this.configOverrides;
    }
}
