import { Request, Response } from 'express';

export class CtrlPing {
    ping(_req: Request, res: Response) {
        const response = {
            pong: true,
        };

        res.json(response);
    }
}
