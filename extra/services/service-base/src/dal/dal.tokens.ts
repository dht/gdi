import * as tokens from '../utils/tokens';
import { firebase } from '../utils/firebase';
import { IToken } from '../types';
import { minutesFromNow } from '../utils/date';

const ACCESS_TOKEN_LIFETIME_IN_MINUTES = 2 * 60;
const REFRESH_TOKEN_LIFETIME_IN_MINUTES = 24 * 60 * 60;

const COLLECTION_KEY_ACCESS = 'serviceTokensAccess';
const COLLECTION_KEY_REFRESH = 'serviceTokensRefresh';

export const dalTokens = {
    getByAccessToken: (accessTokenHashed: string) => {
        return firebase //
            .collection(COLLECTION_KEY_ACCESS)
            .getByPredicate({ value: accessTokenHashed });
    },
    getByRefreshToken: (refreshTokenHashed: string) => {
        return firebase //
            .collection(COLLECTION_KEY_REFRESH)
            .getByPredicate({ value: refreshTokenHashed });
    },
    createAccessToken: async (projectKey: string) => {
        const t = await tokens.generateToken();

        const newRow: IToken = {
            value: t.valueHashed,
            projectKey,
            validUntil: minutesFromNow(ACCESS_TOKEN_LIFETIME_IN_MINUTES),
        };

        const result = await firebase
            .collection(COLLECTION_KEY_ACCESS)
            .add(newRow);

        if (!result.id) {
            throw new Error('Failed to create access token');
        }

        return t.value;
    },
    createRefreshToken: async (projectKey: string) => {
        const t = await tokens.generateToken();

        const newRow: IToken = {
            value: t.valueHashed,
            projectKey,
            validUntil: minutesFromNow(REFRESH_TOKEN_LIFETIME_IN_MINUTES),
        };

        const result = await firebase
            .collection(COLLECTION_KEY_REFRESH)
            .add(newRow);

        if (!result.id) {
            throw new Error('Failed to create access token');
        }

        return t.value;
    },
    createTokens: async (projectKey: string) => {
        const accessToken = await dalTokens.createAccessToken(projectKey);
        const refreshToken = await dalTokens.createRefreshToken(projectKey);

        return {
            accessToken,
            refreshToken,
        };
    },
};
