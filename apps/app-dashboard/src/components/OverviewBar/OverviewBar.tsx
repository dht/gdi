import React from 'react';
import { Container, H1 } from './OverviewBar.style';
import { Clock } from '../Clock/Clock';

export type OverviewBarProps = {};

export function OverviewBar(_props: OverviewBarProps) {
    return (
        <Container
            className='OverviewBar-container'
            data-testid='OverviewBar-container'
        >
            <H1>Overview</H1>
            <Clock />
        </Container>
    );
}

export default OverviewBar;
