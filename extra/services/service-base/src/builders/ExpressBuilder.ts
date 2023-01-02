import * as admin from 'firebase-admin';
import bodyParser from 'body-parser';
import cors from 'cors';
import kleur from 'kleur';
import express, { Express } from 'express';
import { IExpressBuilder, IExpressOptions, IRouters } from '../types';
import { midDebug } from '../middlewares/mid.debug';

export class ExpressBuilder implements IExpressBuilder {
    private options: IExpressOptions = {};
    private routers: IRouters = {};
    private middlewares: any = [];

    constructor() {
        this.withMiddleware(bodyParser.json());
    }

    withOptions(options: IExpressOptions) {
        this.options = options;
        return this;
    }

    withRouters(routers: IRouters) {
        this.routers = routers;
        return this;
    }

    withMiddleware(middleware: any) {
        this.middlewares.push(middleware);
        return this;
    }

    public build(): Express {
        const { withCors, startListening, port, debug } = this.options;

        const app = express();

        if (debug) {
            app.use(midDebug);
        }

        for (const middleware of this.middlewares) {
            app.use(middleware);
        }

        if (withCors) {
            app.use(cors({ origin: true }));
        }

        for (const router in this.routers) {
            app.use(router, this.routers[router]);

            if (debug) {
                console.log('registering ', kleur.cyan(router));
            }
        }

        if (startListening) {
            app.listen(port, () => {
                console.log(`listening on port ${kleur.yellow(port ?? '')}`);
            });
        }

        return app;
    }
}

export default ExpressBuilder;
