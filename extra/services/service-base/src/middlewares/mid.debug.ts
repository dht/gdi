import { NextFunction, Request, Response } from 'express';
import kleur from 'kleur';

export const midDebug = (req: Request, res: Response, next: NextFunction) => {
    const { method, path, body } = req;

    const parts = [
        kleur.cyan(method),
        path,
        body ? JSON.stringify(req.body) : '',
    ];

    console.log(parts.join(' '));

    next();
};
