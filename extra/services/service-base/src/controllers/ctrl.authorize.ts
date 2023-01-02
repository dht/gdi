import * as schema from './schemas/schema.authorize';
import { dalAuthorize } from '../dal/dal.authorize';
import { Request, Response } from 'express';
import { validateParameters } from '../decorators/validateParameters';
import { objectToSnakeCase } from '../utils/case';

export class CtrlAuthorize {
    @validateParameters(schema.authorize)
    async authorize(req: Request, res: Response) {
        const { client_id } = req.query;

        const item = {
            client_id,
        };

        const response = await dalAuthorize.add(item);
        res.json(objectToSnakeCase(response));
    }
}
