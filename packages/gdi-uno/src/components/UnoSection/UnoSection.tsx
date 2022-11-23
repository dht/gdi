import React, { FC } from 'react';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import ArticleBody from '../ArticleBody/ArticleBody';
import ArticleComments from '../ArticleComments/ArticleComments';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import Media from '../Media/Media';
import MediaGrid from '../MediaGrid/MediaGrid';
import Overview from '../Overview/Overview';
import UnoHeader from '../UnoHeader/UnoHeader';
import { Container, Wrapper } from './UnoSection.style';
import { IUnoSection, Json, SectionType } from '../../types';

export type UnoSectionProps = {
    section: IUnoSection;
    data: Json;
};

export function UnoSection(props: UnoSectionProps) {
    const { section } = props;
    const { id, sectionType } = section;

    const Cmp = sections[sectionType];

    return <Cmp key={id} {...props} />;
}

export function SectionHeader(props: UnoSectionProps) {
    const { section, data } = props;
    const { id } = section;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <UnoHeader section={section} data={data} />
        </Container>
    );
}
export function SectionMedia(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <Media section={section} data={data} />
        </Container>
    );
}

export function SectionMediaGrid(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <Wrapper>
                <MediaGrid section={section} data={data} />
            </Wrapper>
        </Container>
    );
}

export function SectionOverview(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <Overview section={section} data={data} />
        </Container>
    );
}

export function SectionAdditionalInfo(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <AdditionalInformation section={section} data={data} />
        </Container>
    );
}

export function SectionArticleHeader(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <ArticleHeader section={section} data={data} />
        </Container>
    );
}

export function SectionArticleBody(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <ArticleBody section={section} data={data} />
        </Container>
    );
}

export function SectionArticleComments(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Container
            className='UnoSection-container'
            data-testid='UnoSection-container'
        >
            <ArticleComments section={section} data={data} />
        </Container>
    );
}

export const sections: Record<SectionType, FC<UnoSectionProps>> = {
    header: SectionHeader,
    additionalInfo: SectionAdditionalInfo,
    media: SectionMedia,
    mediaGrid: SectionMediaGrid,
    overview: SectionOverview,
    articleHeader: SectionArticleHeader,
    articleBody: SectionArticleBody,
    articleComments: SectionArticleComments,
};

export default UnoSection;
