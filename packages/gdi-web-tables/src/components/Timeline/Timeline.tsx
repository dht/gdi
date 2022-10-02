import React from 'react';
import { Container } from './Timeline.style';

export type TimelineProps = {};

export function Timeline(_props: TimelineProps) {
    return (
        <Container
            className='Timeline-container'
            data-testid='Timeline-container'
        >
            Timeline
        </Container>
    );
}

export default Timeline;
