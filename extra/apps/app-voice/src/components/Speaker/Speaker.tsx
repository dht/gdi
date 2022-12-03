import React from 'react';
import { Wrapper, Circle } from './Speaker.style';

export type SpeakerProps = {
    isSpeaking: boolean;
};

export function Speaker(props: SpeakerProps) {
    const { isSpeaking } = props;

    return (
        <Wrapper className='Speaker-wrapper' data-testid='Speaker-wrapper'>
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
            <Circle animated={isSpeaking} />
        </Wrapper>
    );
}

export default Speaker;
