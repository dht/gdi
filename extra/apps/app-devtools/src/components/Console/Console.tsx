import React from 'react';
import { Arg, Container, Index, Log, TimeStamp, Value } from './Console.style';
import { durationMillisElapsed } from '@gdi/language';
import { ILogEvent } from '../../types';

export type ConsoleProps = {
    logs: ILogEvent[];
};

export function Console(props: ConsoleProps) {
    const { logs = [] } = props;

    function renderArg(arg: any) {
        switch (typeof arg) {
            case 'object':
                return <span> {JSON.stringify(arg)}</span>;
            default:
                return arg;
        }
    }

    function renderArgs(args: any[]) {
        return args.map((arg) => (
            <Arg className={typeof arg}>{renderArg(arg)}</Arg>
        ));
    }

    function renderTimestamp(ts: number) {
        const d = durationMillisElapsed(ts);

        return (
            <TimeStamp>
                {d.seconds}.{d.millis}
            </TimeStamp>
        );
    }

    function renderLog(log: ILogEvent) {
        const { index, ts, args } = log;

        return (
            <Log key={log.id} className='log'>
                <Index>{index}</Index>
                <Value>{renderArgs(args)}</Value>
                {renderTimestamp(ts)}
            </Log>
        );
    }

    function renderLogs() {
        return [...logs].reverse().map((log: ILogEvent) => renderLog(log));
    }

    return (
        <Container
            className='Console-container'
            data-testid='Console-container'
        >
            {renderLogs()}
        </Container>
    );
}

export default Console;
