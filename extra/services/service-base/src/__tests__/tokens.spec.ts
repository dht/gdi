import { initInstance } from '../utils/axios';
import Chance from 'chance';
import { ApiErrorCode, HTTPStatusCode } from '../errors/error.codes';

const chance = new Chance();

describe('token:new', () => {
    let axios, response;

    beforeAll(() => {
        axios = initInstance('http://localhost:3020');
    });

    it.skip('new registration', async () => {
        const projectKey = chance.word();

        response = await axios.post('/token', {
            projectKey,
        });

        expect(response.status).toBe(HTTPStatusCode.OK);

        expect(response.data.projectKey).toEqual(projectKey);
        expect(response.data.csrfToken.length).toEqual(36);
        expect(response.data.handshakeToken.length).toEqual(36);
    });

    it('missing parameters', async () => {
        try {
            await axios.post('/token', {});
        } catch (error) {
            expect(error.response.status).toBe(HTTPStatusCode.BadRequest);
            expect(error.response.data).toEqual({
                errorCode: ApiErrorCode.MISSING_PARAMETERS,
                errorMessage: '3 errors occurred',
                errors: [
                    'projectKey is a required field',
                    'handshakeToken is a required field',
                    'csrfToken is a required field',
                ],
            });
        }
    });

    it('invalid parameters', async () => {
        try {
            await axios.post('/token', {
                projectKey: true,
                handshakeToken: true,
                csrfToken: true,
            });
        } catch (error) {
            expect(error.response.status).toBe(HTTPStatusCode.BadRequest);
            expect(error.response.data).toEqual({
                errorCode: ApiErrorCode.INVALID_PARAMETERS,
                errorMessage: '3 errors occurred',
                errors: [
                    'projectKey must be a `string` type, but the final value was: `true`.',
                    'handshakeToken must be a `string` type, but the final value was: `true`.',
                    'csrfToken must be a `string` type, but the final value was: `true`.',
                ],
            });
        }
    });
});

describe('tokens:refresh', () => {
    let axios, response;

    beforeAll(() => {
        axios = initInstance('http://localhost:3020');
    });

    it.skip('new registration', async () => {
        const projectKey = chance.word();

        response = await axios.post('/token', {
            projectKey,
        });

        expect(response.status).toBe(HTTPStatusCode.OK);

        expect(response.data.projectKey).toEqual(projectKey);
        expect(response.data.csrfToken.length).toEqual(36);
        expect(response.data.handshakeToken.length).toEqual(36);
    });

    it('missing parameters', async () => {
        try {
            await axios.post('/api/token/refresh', {});
        } catch (error) {
            expect(error.response.status).toBe(HTTPStatusCode.BadRequest);
            expect(error.response.data).toEqual({
                errorCode: ApiErrorCode.MISSING_PARAMETERS,
                errorMessage: '3 errors occurred',
                errors: [
                    'projectKey is a required field',
                    'handshakeToken is a required field',
                    'csrfToken is a required field',
                ],
            });
        }
    });

    it.only('invalid parameters', async () => {
        try {
            await axios.post('/api/token/refresh', {
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
