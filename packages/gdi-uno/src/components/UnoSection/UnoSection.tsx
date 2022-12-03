import React, { FC } from 'react';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import ArticleBody from '../ArticleBody/ArticleBody';
import ArticleComments from '../ArticleComments/ArticleComments';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import Media from '../Media/Media';
import MediaGrid from '../MediaGrid/MediaGrid';
import Overview from '../Overview/Overview';
import UnoHeader from '../UnoHeader/UnoHeader';
import { Wrapper, Container } from './UnoSection.style';
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

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <UnoHeader section={section} data={data} />
        </Wrapper>
    );
}
export function SectionMedia(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <Media section={section} data={data} />
        </Wrapper>
    );
}

export function SectionMediaGrid(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <Container>
                <MediaGrid section={section} data={data} />
            </Container>
        </Wrapper>
    );
}

export function SectionOverview(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <Overview section={section} data={data} />
        </Wrapper>
    );
}

export function SectionAdditionalInfo(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <AdditionalInformation section={section} data={data} />
        </Wrapper>
    );
}

export function SectionArticleHeader(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <ArticleHeader section={section} data={data} />
        </Wrapper>
    );
}

export function SectionArticleBody(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <ArticleBody section={section} data={data} />
        </Wrapper>
    );
}

export function SectionArticleComments(props: UnoSectionProps) {
    const { section, data } = props;

    return (
        <Wrapper
            className='UnoSection-wrapper'
            data-testid='UnoSection-wrapper'
        >
            <ArticleComments section={section} data={data} />
        </Wrapper>
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
