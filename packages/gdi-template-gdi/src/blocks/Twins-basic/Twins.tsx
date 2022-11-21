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
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type TwinsColors = {
    background?: string;
    text?: string;
};

export type TwinsExtra = {
    href: string;
    imageUrl: string;
};

export function Twins(props: TwinsProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container className='Twins-container' data-testid='Twins-container'>
            <Layered degree={-3}>
                <BkGrid color1='#f2c973' color2='#000' />
                <Wrapper>
                    <Row>
                        <Column>
                            <H2>
                                Built for <span>Firebase</span>
                            </H2>
                            <P>
                                Use Firebase to host your site, store your data
                                and manage your users. You can do all that with
                                Firebase's free Spark plan*
                            </P>
                            <Button href='#features'>See features</Button>
                        </Column>
                        <Column>
                            <H2>
                                Made with{' '}
                                <span style={{ color: 'pink' }}>React</span>
                            </H2>
                            <P>
                                It's easy to extend the CMS with your React
                                skills. Create new templates, apps or data
                                stores. Use JSONs to import & export anything
                            </P>
                            <Button
                                href='https://github.com/dht/gdi'
                                target='_blank'
                            >
                                Visit GitHub
                            </Button>
                        </Column>
                    </Row>
                    <Notes>
                        * The Blaze plan is required for Image Uploading.
                        Thumbnail resizing is done via Cloud Functions. It can
                        still be free for low usage.
                    </Notes>
                </Wrapper>
            </Layered>
        </Container>
    );
}

export default Twins;
