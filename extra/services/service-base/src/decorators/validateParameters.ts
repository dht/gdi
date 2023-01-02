import { Request, Response } from 'express';
import { IEndpointSchema } from '../types';
import { HTTPStatusCode } from '../errors/error.codes';
import {
    checkResponseToErrorBody,
    validateRequestParameters,
} from '../utils/parameters';

export function validateParameters(schema: IEndpointSchema) {
    return function validate(
        _target: Object,
        _propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ): any {
        const originalFunc = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const req: Request = args[0];
            const res: Response = args[1];

            const checkResponse = validateRequestParameters(req, schema);

            if (!checkResponse.isValid) {
                const errorBody = checkResponseToErrorBody(checkResponse);
                res.status(HTTPStatusCode.BadRequest).json(errorBody);
                return;
            }

            return originalFunc.apply(this, args);
        };

        return descriptor;
    };
}
