import * as express from 'express';
import { CtrlTokens } from '../controllers/ctrl.tokens';
import { Request, Response } from 'express';

export const token = express.Router();

const ctrlTokens = new CtrlTokens();

token.post(
    '/',
    async (req: Request, res: Response, next: express.NextFunction) => {
        const { grant_type } = req.body;

        switch (grant_type) {
            case 'authorization_code':
                await ctrlTokens.newToken(req, res);
                break;
            case 'refresh_token':
                await ctrlTokens.refreshToken(req, res);
                break;
            case 'client_credentials':
                res.status(400).send('Client-credentials not implemented');
            default:
                res.status(400).send('Invalid grant_type');
                break;
        }

        next();
    }
);

export default token;
