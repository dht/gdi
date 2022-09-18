import React from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H1,
    Image,
    ImageWrapper,
    P,
    Slogan,
    Wrapper,
} from './Article.style';

export const id = 'com.useGdi.templates.gdi.article-simple';

export type ArticleProps = {
    strings: ArticleStrings;
    colors: ArticleColors;
    extra: ArticleExtra;
};

export type ArticleStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type ArticleColors = {
    background?: string;
    text?: string;
};

export type ArticleExtra = {
    href: string;
    imageUrl: string;
};

export function Article(props: ArticleProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className="Article-container"
            data-testid="Article-container"
            colors={colors}
        >
            <Wrapper>
                <Details>
                    {slogan && <Slogan colors={colors}>{slogan}</Slogan>}
                    <H1>{header}</H1>
                    {description && <P>{description}</P>}
                    <Actions>
                        <CTA colors={colors} href={href}>
                            {ctaButtonText}
                        </CTA>
                    </Actions>
                </Details>
                <ImageWrapper>
                    <Image src={imageUrl} />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
}

export default Article;
