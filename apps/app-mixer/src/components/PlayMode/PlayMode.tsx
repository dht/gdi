import React from 'react';
import { Wrapper } from './PlayMode.style';
import { MessageModal } from '@gdi/web-ui';

export type PlayModeProps = {
    showModal: boolean;
    onClose: () => void;
};

export function PlayMode(props: PlayModeProps) {
    const { showModal } = props;

    return (
        <Wrapper className='PlayMode-wrapper' data-testid='PlayMode-wrapper'>
            <MessageModal
                id='playMode'
                modalHeader='System Notice'
                title='You are now in Playground Mode'
                iconName='Game'
                onClose={props.onClose}
                open={showModal}
            >
                Any changes you make will not be saved. Image upload is
                disabled.
            </MessageModal>
        </Wrapper>
    );
}

export default PlayMode;
