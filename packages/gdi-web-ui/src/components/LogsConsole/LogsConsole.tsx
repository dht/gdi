import React, { useMemo } from 'react';
import { Container } from './LogsConsole.style';
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
        <Container
            className='LogsConsole-container'
            data-testid='LogsConsole-container'
        >
            <Logs flavour='large' items={itemsSorted} showStatus={true} />
        </Container>
    );
}

export default LogsConsole;
