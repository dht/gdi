import React from 'react';
import { Container, Circle } from './Speaker.style';

export type SpeakerProps = {
    isSpeaking: boolean;
};

export function Speaker(props: SpeakerProps) {
    const { isSpeaking } = props;

    return (
        <Container
            className='Speaker-container'
            data-testid='Speaker-container'
        >
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
        </Container>
    );
}

export default Speaker;
