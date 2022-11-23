export type LogMethod =
    | 'log'
    | 'warn'
    | 'error'
    | 'info'
    | 'debug'
    | 'time'
    | 'timeEnd';

export type ILogEventDetail = {
    method: LogMethod;
    args: any[];
};

export type ILogEvent = {
    id: string;
    index: number;
    ts: number;
    logType: LogMethod;
    args: any[];
    scope?: string;
    tsEnd: number;
};
