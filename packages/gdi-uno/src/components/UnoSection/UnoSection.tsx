import React, { FC } from 'react';
import { IUnoSection, Json, SectionType } from '../../types';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import Media from '../Media/Media';
import Overview from '../Overview/Overview';
import UnoHeader from '../UnoHeader/UnoHeader';
import { Container } from './UnoSection.style';

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

export const sections: Record<SectionType, FC<UnoSectionProps>> = {
    header: SectionHeader,
    additionalInfo: SectionAdditionalInfo,
    media: SectionMedia,
    overview: SectionOverview,
};

export default UnoSection;
