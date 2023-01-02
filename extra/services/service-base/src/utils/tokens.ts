import { ApiErrorCode } from '../errors/error.codes';
import { dalTokens } from '../dal/dal.tokens';
import { hashToken } from './bcrypt';
import { initInstance } from './axios';
import { isInPast, isValidDate } from './date';
import { logger } from './log';
import { parseFirebaseRestResponse } from './firebase';
import { v4 as uuid } from 'uuid';
import type { IGeneratedToken, IToken, Json } from '../types';

export const inMemoryTokens: Json = {};

export const generateToken = async (): Promise<IGeneratedToken> => {
    const value = uuid();
    const valueHashed = await hashToken(value);

    return {
        value,
        valueHashed,
    };
};

export type CheckTokenResponse = {
    isValid: boolean;
    isExpired?: boolean;
    error?: string;
    projectKey?: string;
};

export const checkAccessToken = async (
    authorizationHeader: string
): Promise<CheckTokenResponse> => {
    const output: CheckTokenResponse = {
        isValid: false,
        error: 'Invalid access token',
        projectKey: '',
    };
    const endTimerCheckAccessToken = logger.time('checkAccessToken');

    const accessToken = authorizationHeader.replace('Bearer ', '');

    if (!accessToken) {
        return output;
    }

    const endTimerBCrypt = logger.time('bcrypt');

    const tokenHashed = await hashToken(accessToken);

    endTimerBCrypt();

    let token = getTokenFromMemory(tokenHashed);

    if (!token) {
        const result = await dalTokens.getByAccessToken(tokenHashed);

        if (!result || !result.length) {
            endTimerCheckAccessToken();
            return output;
        }

        token = result[0];
    }

    const { validUntil, projectKey } = token;

    if (!validUntil || isInPast(validUntil)) {
        endTimerCheckAccessToken();
        return output;
    }

    saveTokenInMemory(token);
    output.isValid = true;
    output.error = '';
    output.projectKey = projectKey;

    endTimerCheckAccessToken();

    return output;
};

export const checkRefreshToken = async (
    refreshToken: string
): Promise<CheckTokenResponse> => {
    const output: CheckTokenResponse = {
        isValid: false,
        error: 'Invalid refresh token',
        projectKey: '',
    };
    const endTimerCheckRefreshToken = logger.time('checkRefreshToken');

    if (!refreshToken) {
        return output;
    }

    const endTimerBCrypt = logger.time('bcrypt');

    const tokenHashed = await hashToken(refreshToken);

    endTimerBCrypt();

    const result = await dalTokens.getByRefreshToken(tokenHashed);

    if (!result || !result.length) {
        endTimerCheckRefreshToken();
        return output;
    }

    const token = result[0];

    const { validUntil, projectKey } = token;

    if (!validUntil || isInPast(validUntil)) {
        endTimerCheckRefreshToken();
        return output;
    }

    output.isValid = true;
    output.error = '';
    output.projectKey = projectKey;

    endTimerCheckRefreshToken();

    return output;
};

export const checkHandshakeToken = async (
    projectKey: string,
    handshakeToken: string
): Promise<CheckTokenResponse> => {
    const instance = initInstance(
        `https://firestore.googleapis.com/v1/projects/${projectKey}/databases/(default)/documents/`
    );

    try {
        const response = await instance.get(
            `serviceHandshakes/${handshakeToken}`
        );

        const parsedData = parseFirebaseRestResponse(response.data);
        const { validUntil } = parsedData;

        if (!validUntil || !isValidDate(validUntil) || isInPast(validUntil)) {
            return {
                isValid: false,
                isExpired: true,
                error: 'Handshake token expired',
            };
        }
    } catch (_err: any) {
        return {
            isValid: false,
            error: 'Invalid handshake token',
        };
    }

    return {
        isValid: true,
    };
};

export const saveTokenInMemory = (token: IToken) => {
    const { value } = token;
    inMemoryTokens[value] = token;
};

export const removeTokenFromMemory = (token: IToken) => {
    const { value } = token;
    delete inMemoryTokens[value];
};

export const cleanTokensMemory = () => {
    Object.keys(inMemoryTokens).forEach((value) => {
        const token = inMemoryTokens[value];
        const { validUntil } = token;

        if (isInPast(validUntil)) {
            removeTokenFromMemory(token);
        }
    });
};

export const getTokenFromMemory = (contentMain: string) => {
    return inMemoryTokens[contentMain];
};
