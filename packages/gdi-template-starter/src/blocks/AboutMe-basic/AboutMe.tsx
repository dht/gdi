import React, { useContext } from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H2,
    P,
    Slogan,
    Wrapper,
    Row,
    Column,
} from './AboutMe.style';
import { SiteContext } from '@gdi/engine';
import BkGradient from '../../components/BkGradient/BkGradient';

export const id = 'com.usegdi.templates.starter.aboutMe-basic';

export type AboutMeProps = {
    strings: AboutMeStrings;
    colors: AboutMeColors;
    extra: AboutMeExtra;
};

export type AboutMeStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type AboutMeColors = {};

export type AboutMeExtra = {
    href: string;
    imageUrl: string;
};

export function AboutMe(props: AboutMeProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;
    const { ga } = useContext(SiteContext);

    function onClick() {
        ga('navigate', {
            category: 'aboutMe',
            label: ctaButtonText,
            destination: href,
        });
    }

    return (
        <Wrapper
            className='AboutMe-container'
            data-testid='AboutMe-container'
            bk={<BkGradient imageUrl={imageUrl} />}
        >
            <Container>
                <Row>
                    <Column></Column>
                    <Column>
                        <Details>
                            {slogan && (
                                <Slogan colors={colors}>{slogan}</Slogan>
                            )}
                            <H2>{header}</H2>
                            {description && <P>{description}</P>}
                            <Actions>
                                <CTA
                                    onClick={onClick}
                                    colors={colors}
                                    href={href}
                                >
                                    {ctaButtonText}
                                </CTA>
                            </Actions>
                        </Details>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default AboutMe;
