import { Json, Middleware } from '../types';
import { Command } from './command';
import { isPromise } from './promise';

let argv: Json = {};

let middlewares: Middleware[] = [];

let command: Command;

let index = 0;

const init = (_argv: Json) => {
    argv = _argv;

    return {
        use,
        next,
        run,
    };
};

const use = (middleware: Middleware) => {
    middlewares.push(middleware);
};

const next = async () => {
    const nextMiddleware = middlewares[index++];

    if (!nextMiddleware) {
        return;
    }

    const response = nextMiddleware(command, next);
    if (isPromise(response)) {
        await response;
    }
};

const clear = () => {
    index = 0;
};

const run = () => {
    command = new Command(argv);
    clear();
    next();
};

export const streamer = init;
