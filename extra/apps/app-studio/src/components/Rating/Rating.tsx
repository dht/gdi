import React from 'react';
import { Wrapper, Parameter } from './Rating.style';
import { ProgressBarVertical as ProgressBar } from '@gdi/web-ui';

export type RatingProps = {};

export function Rating(_props: RatingProps) {
    return (
        <Wrapper className='Rating-wrapper' data-testid='Rating-wrapper'>
            <Parameter>
                <ProgressBar value={50} color='orange' />
            </Parameter>
            <Parameter>
                <ProgressBar value={10} color='magenta' />
            </Parameter>
            <Parameter>
                <ProgressBar value={10} color='greenyellow' />
            </Parameter>
        </Wrapper>
    );
}

export default Rating;
