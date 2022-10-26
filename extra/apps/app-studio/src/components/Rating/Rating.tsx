import React from 'react';
import { Container, Parameter } from './Rating.style';
import { ProgressBarVertical as ProgressBar } from '@gdi/web-ui';

export type RatingProps = {};

export function Rating(_props: RatingProps) {
    return (
        <Container className='Rating-container' data-testid='Rating-container'>
            <Parameter>
                <ProgressBar value={50} color='orange' />
            </Parameter>
            <Parameter>
                <ProgressBar value={10} color='magenta' />
            </Parameter>
            <Parameter>
                <ProgressBar value={10} color='greenyellow' />
            </Parameter>
        </Container>
    );
}

export default Rating;
