import { Router } from 'express';
import { IRouters, IEndpointsBuilder } from '../types';

export class EndpointsBuilder implements IEndpointsBuilder {
    private basePath: string = '';
    private routers: IRouters = {};

    constructor(basePath: string = '') {
        this.basePath = basePath;
    }

    withRouter(path: string, router: Router) {
        const fullPath = `${this.basePath}${path}`;
        this.routers[fullPath] = router;
        return this;
    }

    withRouters(routers: IRouters) {
        Object.keys(routers).forEach((path) => {
            this.withRouter(path, routers[path]);
        });

        return this;
    }

    build() {
        return this.routers;
    }
}

export default EndpointsBuilder;
