import React from 'react';
import { Wrapper } from './Transcript.style';
import { Button } from '@gdi/web-ui';
import { SpeakButtonContainer } from '../../containers/SpeakButtonContainer';

export type TranscriptProps = {
    showStateDrawer: () => void;
};

export function Transcript(props: TranscriptProps) {
    return (
        <Wrapper
            className='Transcript-wrapper'
            data-testid='Transcript-wrapper'
        >
            <Button text='viz' onClick={props.showStateDrawer} />
            <SpeakButtonContainer />
        </Wrapper>
    );
}

export default Transcript;
