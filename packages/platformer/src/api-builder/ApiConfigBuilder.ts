import { EndpointsConfigOverrides } from 'redux-connected';

export class ApiConfigBuilder {
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
