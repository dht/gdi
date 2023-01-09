import React, { useMemo } from 'react';
import { Wrapper } from './LogsConsole.style';
import { sortBy } from 'shared-base';
import Logs, { LogItem } from '../Logs/Logs';

export type LogsConsoleProps = {
    items: LogItem[];
    showData?: boolean;
};

export function LogsConsole(props: LogsConsoleProps) {
    const { items = [], showData } = props;

    const itemsSorted = useMemo(() => {
        return items.sort(sortBy('id'));
    }, [items]);

    return (
        <Wrapper
            className='LogsConsole-wrapper'
            data-testid='LogsConsole-wrapper'
        >
            <Logs
                flavour='large'
                items={itemsSorted}
                showStatus={true}
                showData={showData}
            />
        </Wrapper>
    );
}

export default LogsConsole;
