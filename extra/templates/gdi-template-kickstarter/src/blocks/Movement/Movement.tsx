import React from 'react';
import ButtonCta from '../../components/ButtonCta/ButtonCta';
import StreetSign from '../../components/StreetSign/StreetSign';
import { H1, P, StreetSignWrapper, Wrapper } from './Movement.style';

export type MovementProps = {};

export function Movement(_props: MovementProps) {
    return (
        <Wrapper className='Movement-wrapper' data-testid='Movement-wrapper'>
            <H1>Join the movement</H1>
            <P>
                <span>9,510</span> backers already have their back covered
            </P>

            <ButtonCta />
            <StreetSignWrapper>
                <StreetSign />
            </StreetSignWrapper>
        </Wrapper>
    );
}

export default Movement;
