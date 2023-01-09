import React from 'react';
import ButtonCta from '../../components/ButtonCta/ButtonCta';
import {
    Button,
    Column,
    Container,
    H2,
    Image,
    Li,
    Row,
    Ul,
    Wrapper,
    Your,
} from './YouCompleteMe.style';

export type YouCompleteMeProps = {};

export function YouCompleteMe(_props: YouCompleteMeProps) {
    return (
        <Wrapper
            className='YouCompleteMe-wrapper'
            data-testid='YouCompleteMe-wrapper'
        >
            <Container>
                <Row>
                    <Column>
                        <H2>
                            Complete your <span>urban kit</span>
                        </H2>

                        <Your>Your:</Your>

                        <Ul>
                            <Li>MacBook Pro 13" M2</Li>
                            <Li>Favorite coffee shop</Li>
                            <Li>Hifi headphones</Li>
                            <Li>UrbanKit™ One</Li>
                        </Ul>

                        <Button src='/button-kickstarter-chalk-2.png' />
                    </Column>
                    <Column>
                        <Image src='/coffeeshop-menu-board-2.png' />
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default YouCompleteMe;
