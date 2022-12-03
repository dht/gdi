import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import BkGrid from '../../components/BkGrid/BkGrid';
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

    const { ga } = useContext(SiteContext);

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

    const onClick = (label: string) => () => {
        ga('navigate', {
            category: 'twins',
            label,
        });
    };

    return (
        <Wrapper
            className='Twins-wrapper'
            data-testid='Twins-wrapper'
            bk={<BkGrid rotation={rotation} color1='#f2c973' color2='#000' />}
        >
            <Container>
                <Row>
                    <Column>
                        {renderH2(header)}
                        <P>{description}</P>
                        <Button
                            href={href}
                            target={target(href)}
                            onClick={onClick('href')}
                        >
                            {buttonText}
                        </Button>
                    </Column>
                    <Column>
                        {renderH2(headerSecondary, 'pink')}
                        <P>{descriptionSecondary}</P>
                        <Button
                            href={hrefSecondary}
                            target={target(hrefSecondary)}
                            onClick={onClick('hrefSecond')}
                        >
                            {buttonTextSecondary}
                        </Button>
                    </Column>
                </Row>
                <Notes>{notes}</Notes>
            </Container>
        </Wrapper>
    );
}

export default Twins;
