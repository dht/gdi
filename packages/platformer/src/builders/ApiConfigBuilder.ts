import { ConnectionType, EndpointsConfigOverrides } from 'redux-connected';
import { IApiConfigBuilder } from '../types';

export class ApiConfigBuilder implements IApiConfigBuilder {
    private configOverrides: EndpointsConfigOverrides = {};
    private noServerMode = false;

    withEndpointsConfigOverrides(overrides: EndpointsConfigOverrides = {}) {
        this.configOverrides = {
            ...this.configOverrides,
            ...overrides,
        };

        return this;
    }

    withNoServer(noServerMode: boolean = false) {
        this.noServerMode = noServerMode;
        return this;
    }

    build(): EndpointsConfigOverrides {
        if (this.noServerMode) {
            Object.keys(this.configOverrides).forEach((key) => {
                this.configOverrides[key].connectionType = ConnectionType.NONE;
            });
        }

        return this.configOverrides;
    }
}
