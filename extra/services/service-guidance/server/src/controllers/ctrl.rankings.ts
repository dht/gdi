import { acl, validateParameters } from '@gdi/service-base';
import { dalRankings } from '../dal/dal.rankings';
import * as schema from './schemas/schema.rankings';
import type { Request, Response } from 'express';

export class CtrlRankings {
    @acl('private')
    @validateParameters(schema.get)
    async get(_req: Request, res: Response) {
        const response = await dalRankings.get();
        res.json(response);
    }
}
