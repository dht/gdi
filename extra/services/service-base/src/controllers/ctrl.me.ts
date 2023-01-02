import { dalMe } from '../dal/dal.me';
import { Request, Response } from 'express';
import { acl } from '../decorators/acl';

export class CtrlMe {
    @acl('private')
    async me(_req: Request, res: Response) {
        const { projectKey } = res.locals;
        const response = await dalMe.get(projectKey);
        res.json(response);
    }
}
