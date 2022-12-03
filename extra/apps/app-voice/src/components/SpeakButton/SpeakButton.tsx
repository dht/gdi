import React from 'react';
import { Wrapper } from './SpeakButton.style';
import classnames from 'classnames';

export type SpeakButtonProps = {
    isSpeaking: boolean;
    onMouseDown: () => void;
    onMouseUp: () => void;
};

export function SpeakButton(props: SpeakButtonProps) {
    const { isSpeaking } = props;

    const className = classnames('SpeakButton-wrapper', {
        on: isSpeaking,
    });

    return (
        <Wrapper
            className={className}
            data-testid='SpeakButton-wrapper'
            onTouchStart={props.onMouseDown}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onTouchEnd={props.onMouseUp}
        >
            <i className='material-icons'>micro</i>
        </Wrapper>
    );
}

export default SpeakButton;
