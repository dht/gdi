import React from 'react';
import Bk from '../../components/Bk/Bk';
import BottomBar from '../../components/BottomBar/BottomBar';
import MainMenu from '../../components/MainMenu/MainMenu';
import Signature from '../../components/Signature/Signature';
import {
    Avatar,
    Bottom,
    Center,
    Container,
    Content,
    JobTitle,
    Name,
    Top,
    Wrapper,
} from './Card.style';

export const id = 'com.usegdi.templates.card.card-phone';

export type CardProps = {
    strings: CardStrings;
    colors: CardColors;
    extra: CardExtra;
};

export type CardStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type CardColors = {
    background?: string;
    text?: string;
};

export type CardExtra = {
    href: string;
    imageUrl: string;
};

export function Card(props: CardProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='Card-container'
            data-testid='Card-container'
            colors={colors}
        >
            <Wrapper>
                <Bk color='white'>
                    <Signature>
                        David
                        <br /> Hume
                    </Signature>
                </Bk>
                <Content>
                    <Top>
                        <Avatar />
                        <Name>David Hume</Name>
                        <JobTitle>Designer</JobTitle>
                    </Top>
                    <Center>
                        <MainMenu />
                    </Center>
                    <Bottom>
                        <BottomBar />
                    </Bottom>
                </Content>
            </Wrapper>
        </Container>
    );
}

export default Card;
