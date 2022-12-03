import React, { useContext } from 'react';
import { Button, Container, H3, Row, Wrapper } from './CtaAction.style';
import { SiteContext } from '@gdi/engine';
import BkBlur from '../../components/BkBlur/BkBlur';

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
    imageUrl: string;
};

export function CtaAction(props: CtaActionProps) {
    const { strings, colors, extra } = props;
    const { ctaButtonText, slogan } = strings;
    const { href, imageUrl } = extra;
    const { ga } = useContext(SiteContext);

    function onClick() {
        ga('navigate', {
            category: 'ctaAction',
            label: ctaButtonText,
            destination: href,
        });
    }

    return (
        <Wrapper
            className='CtaAction-container'
            data-testid='CtaAction-container'
            colors={colors}
            bk={<BkBlur imageUrl={imageUrl} />}
        >
            <Container>
                <Row>
                    <H3>{slogan}</H3>
                    <Button onClick={onClick} href={href} target='_blank'>
                        {ctaButtonText}
                    </Button>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default CtaAction;
