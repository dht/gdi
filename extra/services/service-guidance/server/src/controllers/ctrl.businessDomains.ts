import { acl, i18n, validateParameters } from '@gdi/service-base';
import { dalBusinessDomains } from '../dal/dal.businessDomains';
import * as schema from './schemas/schema.businessDomains';
import type { Request, Response } from 'express';

export class CtrlBusinessDomains {
    @i18n('en')
    @acl('private')
    @validateParameters(schema.get)
    async get(req: Request, res: Response) {
        const response = await dalBusinessDomains.get(res.locals.languageCode);
        res.json(response);
    }
}
