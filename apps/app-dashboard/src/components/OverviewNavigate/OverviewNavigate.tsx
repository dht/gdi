import React from 'react';
import { invokeEvent } from 'shared-base';
import { Container } from './OverviewNavigate.style';

export type OverviewNavigateProps = {
    inboxMessage?: IInboxMessage;
};

export function OverviewNavigate(props: OverviewNavigateProps) {
    const { inboxMessage } = props;

    invokeEvent('navigatePop', {});

    return (
        <Container
            className='OverviewNavigate-container'
            data-testid='OverviewNavigate-container'
        >
            OverviewNavigate {inboxMessage?.id}
        </Container>
    );
}

export default OverviewNavigate;
