import React from 'react';
import { Button, Container, H3, Wrapper } from './CtaAction.style';

export const id = 'com.usegdi.templates.starter.ctaAction-basic';

export type CtaActionProps = {
    strings: CtaActionStrings;
    colors: CtaActionColors;
    extra: CtaActionExtra;
};

export type CtaActionStrings = {
    slogan?: string;
    ctaButtonText: string;
};

export type CtaActionColors = {};

export type CtaActionExtra = {
    href: string;
};

export function CtaAction(props: CtaActionProps) {
    const { strings, colors, extra } = props;
    const { ctaButtonText, slogan } = strings;
    const { href } = extra;

    return (
        <Container
            className='CtaAction-container'
            data-testid='CtaAction-container'
            colors={colors}
        >
            <Wrapper>
                <H3>{slogan}</H3>
                <Button href={href}>{ctaButtonText}</Button>
            </Wrapper>
        </Container>
    );
}

export default CtaAction;
