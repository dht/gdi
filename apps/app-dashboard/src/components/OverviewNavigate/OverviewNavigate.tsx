import React from 'react';
import { invokeEvent } from 'shared-base';
import { Wrapper } from './OverviewNavigate.style';

export type OverviewNavigateProps = {
    inboxMessage?: IInboxMessage;
};

export function OverviewNavigate(props: OverviewNavigateProps) {
    const { inboxMessage } = props;

    invokeEvent('navigatePop');

    return (
        <Wrapper
            className='OverviewNavigate-wrapper'
            data-testid='OverviewNavigate-wrapper'
        >
            OverviewNavigate {inboxMessage?.id}
        </Wrapper>
    );
}

export default OverviewNavigate;
