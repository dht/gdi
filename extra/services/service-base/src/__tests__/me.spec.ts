import { HTTPStatusCode } from '../errors/error.codes';
import { initInstance } from '../utils/axios';

describe('me', () => {
    let axios;

    beforeAll(() => {
        axios = initInstance('http://localhost:3020');
    });

    it('ping', async () => {
        const response = await axios.get('/ping');

        expect(response.status).toBe(HTTPStatusCode.OK);

        expect(response.data).toEqual({
            pong: true,
        });
    });
});
