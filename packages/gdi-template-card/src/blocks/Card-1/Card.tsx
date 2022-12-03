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

export const id = 'com.usegdi.templates.card.card-1';

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
        <Wrapper
            className='Card-wrapper'
            data-testid='Card-wrapper'
            colors={colors}
        >
            <Container>
                <Bk color='#f3f3f3'>
                    <Signature>
                        David
                        <br /> Baker
                    </Signature>
                </Bk>
                <Content>
                    <Top>
                        <Avatar />
                        <Name>David Baker</Name>
                        <JobTitle>Photographer</JobTitle>
                    </Top>
                    <Center>
                        <MainMenu />
                    </Center>
                    <Bottom>
                        <BottomBar />
                    </Bottom>
                </Content>
            </Container>
        </Wrapper>
    );
}

export default Card;
