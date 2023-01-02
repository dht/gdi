import { acl, validateParameters } from '@gdi/service-base';
import { dalRequirements } from '../dal/dal.requirements';
import * as schema from './schemas/schema.requirements';
import type { Request, Response } from 'express';

export class CtrlRequirements {
    @acl('private')
    @validateParameters(schema.get)
    async get(_req: Request, res: Response) {
        const response = await dalRequirements.get();
        res.json(response);
    }
}
