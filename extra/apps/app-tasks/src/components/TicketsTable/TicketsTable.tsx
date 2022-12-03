import React, { useMemo } from 'react';
import {
    Actions,
    Wrapper,
    Details,
    Row,
    Scope,
    Summary,
    Title,
} from './TicketsTable.style';
import { actions } from '../../store';
import { Icon, GenericTable } from '@gdi/web-ui';
import { useDispatch, useSelector } from 'react-redux';

export type TicketsTableProps = TicketsTableContainerProps & {
    tickets: any[];
    callbacks: {
        connect: (issueId: string) => void;
        start: (issueId: string) => void;
    };
};

export function TicketsTable(props: TicketsTableProps) {
    const { tickets, height, itemHeight = 30, emptyMessage, callbacks } = props;

    function renderSummary(summary: string) {
        const regexScope = /([a-zA-Z]+) ?\([a-zA-Z-]+\):/;

        const match = summary.match(regexScope);

        if (!match) {
            return (
                <Details>
                    <Summary>{summary}</Summary>
                </Details>
            );
        }

        return (
            <Details>
                <Scope>{match[0]}</Scope>
                <Summary>{summary.replace(match[0], '').trim()}</Summary>
            </Details>
        );
    }

    const TableRow = (rowProps: any) => {
        const { item } = rowProps;
        const { key, summary = '' } = item;

        return (
            <Row>
                <Title>{key}</Title>
                {renderSummary(summary)}
                <Actions>
                    <Icon
                        className='icon'
                        iconName='Play'
                        onClick={() => callbacks.start(item.id)}
                    />
                    <Icon
                        className='icon'
                        iconName='GenericScan'
                        onClick={() => callbacks.connect(item.id)}
                    />
                </Actions>
            </Row>
        );
    };

    function renderHeader() {
        if (props.renderHeader) {
            return props.renderHeader(tickets.length === 0);
        }
    }

    return (
        <Wrapper
            className='TicketsTable-wrapper'
            data-testid='TicketsTable-wrapper'
        >
            {renderHeader()}
            <GenericTable
                height={height}
                itemHeight={itemHeight}
                data={tickets}
                emptyMessage={emptyMessage}
            >
                {TableRow}
            </GenericTable>
        </Wrapper>
    );
}

export type TicketsTableContainerProps = {
    selector: any;
    renderHeader?: (isEmpty: boolean) => JSX.Element | null;
    emptyMessage?: string;
    height: number;
    itemHeight?: number;
};

export function TicketsTableContainer(props: TicketsTableContainerProps) {
    const dispatch = useDispatch();
    const tickets: any = useSelector(props.selector);

    const callbacks = useMemo(
        () => ({
            connect: (ticketToWrite: string) => {
                const action = actions.appStateTasks.patch({ ticketToWrite });
                dispatch(action);
            },
            start: (ticketId: string) => {
                dispatch({ type: 'BLKR_SESSION_START', payload: { ticketId } });
            },
        }),
        []
    );

    return <TicketsTable {...props} tickets={tickets} callbacks={callbacks} />;
}

export default TicketsTableContainer;
