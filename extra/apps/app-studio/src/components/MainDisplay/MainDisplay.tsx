import React from 'react';
import {
    Wrapper,
    Ear,
    ContextLine,
    Domain,
    SignalLine,
    Listening,
    Percent,
    Actions,
    Action,
} from './MainDisplay.style';
import { usePopup } from '@gdi/hooks';
import { HashTags } from '@gdi/web-ui';

export type MainDisplayProps = {
    data: IInboxMessage;
    callbacks: {
        onCta: (item: IInboxMessage) => void;
        onSnooze: (item: IInboxMessage) => void;
        onClose: () => void;
    };
};

export function MainDisplay(props: MainDisplayProps) {
    const { data, callbacks } = props;
    const { domain, domainSemantic, serviceName, title, description, tags } =
        data;

    const { className, onClose: onCloseAnimation } = usePopup(
        callbacks.onClose
    );

    const onCta = () => {
        callbacks.onCta(data);
        onCloseAnimation();
    };

    const onSnooze = () => {
        callbacks.onSnooze(data);
        onCloseAnimation();
    };

    return (
        <Wrapper className={className} data-testid='MainDisplay-wrapper'>
            <ContextLine>
                <Domain>{domain}</Domain>
                <Domain>{domainSemantic}</Domain>
                <Domain>{serviceName}</Domain>
            </ContextLine>
            <Ear>
                {title}, {description}
            </Ear>
            <SignalLine>
                <HashTags color='white' tags={tags} />
                <Listening />
            </SignalLine>

            <Actions>
                <Action className='primary' onClick={onCta}>
                    <i className='material-icons'>tab</i>
                    Let's see
                </Action>
                <Action onClick={onSnooze}>
                    <i className='material-icons'>alarm</i>
                    Snooze
                </Action>
            </Actions>
        </Wrapper>
    );
}

export default MainDisplay;
