import { IEndpointSchema } from '../../types';

export const newToken: IEndpointSchema = {
    body: {
        client_id: 'string',
        grant_type: 'string',
        client_secret: 'string?',
        code: 'string?',
        redirect_uri: 'string?',
    },
};

export const refreshToken: IEndpointSchema = {
    body: {
        refresh_token: 'string',
    },
};
