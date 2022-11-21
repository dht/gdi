import React from 'react';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import { Button, Container, H3, Wrapper } from './CtaAction.style';

export const id = 'com.usegdi.templates.starter.ctaAction-basic';

export type CtaActionProps = {
    strings: CtaActionStrings;
    colors: CtaActionColors;
    extra: CtaActionExtra;
};

export type CtaActionStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type CtaActionColors = {
    background?: string;
    text?: string;
};

export type CtaActionExtra = {
    href: string;
    imageUrl: string;
};

export function CtaAction(props: CtaActionProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='CtaAction-container'
            data-testid='CtaAction-container'
            colors={colors}
        >
            <Wrapper>
                <H3>Join my 15th October course</H3>
                <Button>Join Course</Button>
            </Wrapper>
        </Container>
    );
}

export default CtaAction;
