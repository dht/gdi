import { AccessLevel, IErrorBody } from '../types';
import { checkAccessToken } from '../utils/tokens';
import { dalTokens } from '../dal/dal.tokens';
import { Request, Response } from 'express';
import { checkResponseToErrorBody } from '../utils/parameters';
import { ApiErrorCode, HTTPStatusCode } from '../errors/error.codes';

export function acl(accessLevel: AccessLevel) {
    return function acl(
        _target: Object,
        _propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const originalFunc = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const req: Request = args[0];
            const res: Response = args[1];

            if (accessLevel === 'public') {
                return originalFunc.apply(this, args);
            }

            const { authorization = '' } = req.headers;

            const checkResponse = await checkAccessToken(
                authorization as string
            );

            res.locals.projectKey = checkResponse.projectKey;

            if (!checkResponse.isValid) {
                const errorBody: IErrorBody = {
                    errorCode: ApiErrorCode.INVALID_ACCESS_TOKEN,
                    errorMessage: 'Invalid access token',
                };

                res.status(HTTPStatusCode.Unauthorized).json(errorBody);
                return;
            }

            return originalFunc.apply(this, args);
        };

        return descriptor;
    };
}
