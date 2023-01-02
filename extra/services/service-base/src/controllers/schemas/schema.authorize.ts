import { IEndpointSchema } from '../../types';

export const authorize: IEndpointSchema = {
    body: {
        client_id: 'string',
        response_type: 'string',
        redirect_url: 'string?',
        state: 'string?',
        scope: 'string?',
    },
};
