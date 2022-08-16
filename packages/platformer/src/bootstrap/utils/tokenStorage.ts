import { ITokenStorage, Tokens } from 'axios-oauth';
import { getString, setString } from './localStorage';

const ACCESS_TOKEN_KEY = 'MAIN_ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'MAIN_REFRESH_TOKEN';

export const tokenStorage: ITokenStorage = {
    getTokens: () => {
        const accessToken = getString(ACCESS_TOKEN_KEY);
        const refreshToken = getString(REFRESH_TOKEN_KEY);

        return Promise.resolve({
            access_token: accessToken,
            refresh_token: refreshToken,
        });
    },
    saveTokens: (tokens: Tokens) => {
        let success = true;

        try {
            setString(ACCESS_TOKEN_KEY, tokens.access_token);
            setString(REFRESH_TOKEN_KEY, tokens.refresh_token);
        } catch (err: any) {
            success = false;
        }

        return Promise.resolve(success);
    },
};
