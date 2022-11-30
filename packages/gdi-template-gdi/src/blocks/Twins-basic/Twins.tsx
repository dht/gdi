import React from 'react';
import BkGrid from '../../components/BkGrid/BkGrid';
import Layered from '../../components/Layered/Layered';
import {
    Column,
    Container,
    H2,
    P,
    Row,
    Wrapper,
    Button,
    Notes,
} from './Twins.style';

export const id = 'com.usegdi.templates.gdi.twins-basic';

export type TwinsProps = {
    strings: TwinsStrings;
    colors: TwinsColors;
    extra: TwinsExtra;
};

export type TwinsStrings = {
    header: string;
    description: string;
    buttonText: string;
    headerSecondary: string;
    descriptionSecondary: string;
    buttonTextSecondary: string;
    notes?: string;
};

export type TwinsColors = {};

export type TwinsExtra = {
    href: string;
    hrefSecondary: string;
    rotation: number;
};

export function Twins(props: TwinsProps) {
    const { strings, extra } = props;
    const {
        header,
        description,
        buttonText,
        headerSecondary,
        descriptionSecondary,
        buttonTextSecondary,
        notes,
    } = strings;
    const { href, hrefSecondary, rotation } = extra;

    function renderH2(text: string = '', className?: string) {
        const parts = text.split(/\[/gi);

        return (
            <H2 className={className}>
                {parts.map((part, index) => {
                    if (index % 2 === 1) {
                        return (
                            <span key={index}>
                                {part.replace(/[\[\]]/g, '')}
                            </span>
                        );
                    } else {
                        return part;
                    }
                })}
            </H2>
        );
    }

    const target = (linkHref: string = '') => {
        if (linkHref.startsWith('http')) {
            return '_blank';
        }
    };

    return (
        <Container
            className='Twins-container'
            data-testid='Twins-container'
            rotation={rotation}
        >
            <Layered degree={rotation}>
                <BkGrid color1='#f2c973' color2='#000' />
                <Wrapper>
                    <Row>
                        <Column>
                            {renderH2(header)}
                            <P>{description}</P>
                            <Button href={href} target={target(href)}>
                                {buttonText}
                            </Button>
                        </Column>
                        <Column>
                            {renderH2(headerSecondary, 'pink')}
                            <P>{descriptionSecondary}</P>
                            <Button
                                href={hrefSecondary}
                                target={target(hrefSecondary)}
                            >
                                {buttonTextSecondary}
                            </Button>
                        </Column>
                    </Row>
                    <Notes>{notes}</Notes>
                </Wrapper>
            </Layered>
        </Container>
    );
}

export default Twins;
