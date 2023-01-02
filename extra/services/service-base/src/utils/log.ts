const DEBUG = true;

interface ILogger {
    log: (message: string) => void;
    error: (message: string) => void;
    warning: (message: string) => void;
    info: (message: string) => void;
    debug: (message: string) => void;
    time: (message: string) => () => void;
    timeEnd: (message: string) => void;
}

const loggerEmpty: ILogger = {
    log: () => {},
    error: () => {},
    warning: () => {},
    info: () => {},
    debug: () => {},
    time: () => () => {},
    timeEnd: () => {},
};

const timeCounters: Record<string, number> = {};

const loggerConsole: ILogger = {
    log: (message: string) => {
        console.log(message);
    },
    error: (message: string) => {
        console.error(message);
    },
    warning: (message: string) => {
        console.warn(message);
    },
    info: (message: string) => {
        console.log(message);
    },
    debug: (message: string) => {
        console.log(message);
    },
    time: (message: string) => {
        let j = timeCounters[message] || 0;
        j++;

        console.time(`#${j}: ${message}`);

        timeCounters[message] = j;

        return () => {
            console.timeEnd(`#${j}: ${message}`);
        };
    },
    timeEnd: (message: string) => {
        console.timeEnd(message);
    },
};

export const logger = DEBUG ? loggerConsole : loggerEmpty;
