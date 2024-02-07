import React from 'react';
import { Wrapper } from './TubeCard.style';

export type TubeCardProps = {};

export function TubeCard(_props: TubeCardProps) {
    return (
        <Wrapper className="TubeCard-wrapper" data-testid="TubeCard-wrapper">
            TubeCard
        </Wrapper>
    );
}

export default TubeCard;
