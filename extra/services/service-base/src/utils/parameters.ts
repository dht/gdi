import { Request } from 'express';
import { ApiErrorCode } from '../errors/error.codes';
import { IEndpointSchema, IErrorBody } from '../types';
import { endpointSchemaToYup } from './yup';

export type CheckParamsResponse = {
    isValid: boolean;
    missingParamsExist: boolean;
    invalidParamsExist: boolean;
    errors: string[];
    errorMessage: string;
};

export const validateRequestParameters = (
    req: Request,
    schema: IEndpointSchema
) => {
    const output: CheckParamsResponse = {
        isValid: true,
        missingParamsExist: false,
        invalidParamsExist: false,
        errors: [],
        errorMessage: '',
    };

    const { body, query } = req;

    const inParams = { ...body, ...query };

    const yup = endpointSchemaToYup(schema);

    try {
        yup.validateSync(inParams, {
            strict: true,
            abortEarly: false,
        });
    } catch (err: any) {
        const { message, errors = [] } = err;

        const regexInvalid = /must be a `[a-z]+` type/;
        const regexMissing = /is a required field/;

        output.errorMessage = message;
        output.missingParamsExist = errors.some((err: string) => err.match(regexMissing)); // prettier-ignore
        output.invalidParamsExist = errors.some((err: string) => err.match(regexInvalid)); // prettier-ignore
        output.errors = errors;
        output.isValid = false;
    }

    return output;
};

export const checkResponseToErrorBody = (
    checkResponse: CheckParamsResponse
): IErrorBody => {
    const { errorMessage, errors, invalidParamsExist, missingParamsExist } =
        checkResponse;

    let errorCode: ApiErrorCode = ApiErrorCode.UNKNOWN;

    if (missingParamsExist) {
        errorCode = ApiErrorCode.MISSING_PARAMETERS;
    } else if (invalidParamsExist) {
        errorCode = ApiErrorCode.INVALID_PARAMETERS;
    }

    return {
        errorCode,
        errorMessage,
        errors,
    };
};
