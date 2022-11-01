import React from 'react';
import { Container } from './SpeakButton.style';
import classnames from 'classnames';

export type SpeakButtonProps = {
    isSpeaking: boolean;
    onMouseDown: () => void;
    onMouseUp: () => void;
};

export function SpeakButton(props: SpeakButtonProps) {
    const { isSpeaking } = props;

    const className = classnames('SpeakButton-container', {
        on: isSpeaking,
    });

    return (
        <Container
            className={className}
            data-testid='SpeakButton-container'
            onTouchStart={props.onMouseDown}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onTouchEnd={props.onMouseUp}
        >
            <i className='material-icons'>micro</i>
        </Container>
    );
}

export default SpeakButton;
