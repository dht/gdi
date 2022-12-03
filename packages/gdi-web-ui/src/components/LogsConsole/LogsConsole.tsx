import React, { useMemo } from 'react';
import { Wrapper } from './LogsConsole.style';
import { sortBy } from 'shared-base';
import Logs from '../Logs/Logs';

export type LogsConsoleProps = {
    items: Json[];
};

export function LogsConsole(props: LogsConsoleProps) {
    const { items = [] } = props;

    const itemsSorted = useMemo(() => {
        return items.sort(sortBy('id'));
    }, [items]);

    return (
        <Wrapper
            className='LogsConsole-wrapper'
            data-testid='LogsConsole-wrapper'
        >
            <Logs flavour='large' items={itemsSorted} showStatus={true} />
        </Wrapper>
    );
}

export default LogsConsole;
