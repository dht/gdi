import React from 'react';
import { Container } from './Transcript.style';
import { Button } from '@gdi/web-ui';
import { SpeakButtonContainer } from '../../containers/SpeakButtonContainer';

export type TranscriptProps = {
    showStateDrawer: () => void;
};

export function Transcript(props: TranscriptProps) {
    return (
        <Container
            className='Transcript-container'
            data-testid='Transcript-container'
        >
            <Button text='viz' onClick={props.showStateDrawer} />
            <SpeakButtonContainer />
        </Container>
    );
}

export default Transcript;
