import * as schema from './schemas/schema.tokens';
import { ApiErrorCode, HTTPStatusCode } from '../errors/error.codes';
import { checkHandshakeToken, checkRefreshToken } from '../utils/tokens';
import { dalAuthorize } from '../dal/dal.authorize';
import { hashToken } from '../utils/bcrypt';
import { objectToSnakeCase } from '../utils/case';
import { isInPast } from '../utils/date';
import { Request, Response } from 'express';
import { validateParameters } from '../decorators/validateParameters';
import { dalTokens } from '../dal/dal.tokens';
import { dalProjects } from '../dal/dal.projects';

export class CtrlTokens {
    @validateParameters(schema.newToken)
    async newToken(req: Request, res: Response) {
        const { code, client_id } = req.body;

        console.log('code ->', code);

        const codeHashed = await hashToken(code);

        let response: any;

        response = await checkHandshakeToken(client_id, code);

        if (!response.isValid) {
            res.status(HTTPStatusCode.Unauthorized).send({
                error: ApiErrorCode.INVALID_HANDSHAKE_TOKEN,
            });
            return;
        }

        response = await dalAuthorize.getByPredicate({
            handshakeToken: codeHashed,
        });

        console.log('response ->', codeHashed, response);

        const noMatchingHandshakeTokens = response.length === 0;

        const authorizationLine = response[0] ?? {};
        const { clientId, validUntil } = authorizationLine;

        const clientIdMismatch = clientId !== client_id;

        const expiredToken = !validUntil || isInPast(validUntil);

        if (noMatchingHandshakeTokens || clientIdMismatch || expiredToken) {
            res.status(HTTPStatusCode.Unauthorized).send({
                error: ApiErrorCode.INVALID_HANDSHAKE_TOKEN,
            });
            return;
        }

        response = await dalAuthorize.delete(authorizationLine.id);

        response = await dalProjects.patch(client_id, {
            projectKey: client_id,
        });

        response = await dalTokens.createTokens(client_id);

        res.status(HTTPStatusCode.OK).send(objectToSnakeCase(response));
    }

    @validateParameters(schema.refreshToken)
    async refreshToken(req: Request, res: Response) {
        const { refresh_token } = req.body;

        let response: any;

        response = await checkRefreshToken(refresh_token);

        if (!response.isValid || !response.projectKey) {
            res.status(HTTPStatusCode.Unauthorized).send({
                error: ApiErrorCode.INVALID_REFRESH_TOKEN,
            });
            return;
        }

        response = await dalTokens.createTokens(response.projectKey);

        res.status(HTTPStatusCode.OK).send(objectToSnakeCase(response));
    }
}
