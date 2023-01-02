import { acl, i18n, validateParameters } from '@gdi/service-base';
import { dalBmsFeatures } from '../dal/dal.bmsFeatures';
import * as schema from './schemas/schema.bmsFeatures';
import type { Request, Response } from 'express';

export class CtrlBmsFeatures {
    @i18n('en')
    @acl('private')
    @validateParameters(schema.get)
    async get(_req: Request, res: Response) {
        const response = await dalBmsFeatures.get(res.locals.languageCode);
        res.json(response);
    }
}
