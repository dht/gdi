import { initInstance } from '../utils/axios';
import Chance from 'chance';
import { ApiErrorCode, HTTPStatusCode } from '../errors/error.codes';

const chance = new Chance();

describe.skip('authorize', () => {
    let axios, response;

    beforeAll(() => {
        axios = initInstance('http://localhost:3020');
    });

    it('new registration', async () => {
        const projectKey = chance.word();

        response = await axios.post('authorize', {
            projectKey,
        });

        expect(response.status).toBe(HTTPStatusCode.OK);

        expect(response.data.projectKey).toEqual(projectKey);
        expect(response.data.csrfToken.length).toEqual(36);
        expect(response.data.handshakeToken.length).toEqual(36);
    });

    it('missing parameters', async () => {
        try {
            await axios.post('/authorize', {});
        } catch (error) {
            expect(error.response.status).toBe(HTTPStatusCode.BadRequest);
            expect(error.response.data).toEqual({
                errorCode: ApiErrorCode.MISSING_PARAMETERS,
                errorMessage: 'projectKey is a required field',
                errors: ['projectKey is a required field'],
            });
        }
    });

    it('invalid parameters', async () => {
        try {
            await axios.post('/authorize', {
                projectKey: true,
            });
        } catch (error) {
            expect(error.response.status).toBe(HTTPStatusCode.BadRequest);
            expect(error.response.data).toEqual({
                errorCode: ApiErrorCode.INVALID_PARAMETERS,
                errorMessage:
                    'projectKey must be a `string` type, but the final value was: `true`.',
                errors: [
                    'projectKey must be a `string` type, but the final value was: `true`.',
                ],
            });
        }
    });
});
