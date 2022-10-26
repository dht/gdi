import React from 'react';
import TicketsTable from '../TicketsTable/TicketsTable';
import { Container, Header, Link } from './TicketsRecent.style';

export type TicketsRecentProps = {
    selector: any;
    callbacks: {
        clearRecentSessions: () => void;
    };
};

export function TicketsRecent(props: TicketsRecentProps) {
    const { selector, callbacks } = props;

    function renderHeader(isEmpty: boolean) {
        if (isEmpty) {
            return null;
        }

        return (
            <Header>
                <Link onClick={callbacks.clearRecentSessions}>
                    Clear recent sessions
                </Link>
            </Header>
        );
    }

    return (
        <Container
            className='TicketsRecent-container'
            data-testid='TicketsRecent-container'
        >
            <TicketsTable
                selector={selector}
                height={710}
                itemHeight={50}
                emptyMessage='No recent sessions'
                renderHeader={renderHeader}
            />
        </Container>
    );
}

export default TicketsRecent;
