import React from 'react';
import { Container, Wrapper, Text } from './SectionHeader.style';

export const id = 'com.usegdi.templates.tech.sectionHeader-basic';

export type SectionHeaderProps = {
    sequence?: number;
    strings: SectionHeaderStrings;
    colors: SectionHeaderColors;
    extra: SectionHeaderExtra;
};

export type SectionHeaderStrings = {
    text?: string;
};

export type SectionHeaderColors = {};

export type SectionHeaderExtra = {
    id?: string;
    isHidden?: boolean;
};

export function SectionHeader(props: SectionHeaderProps) {
    const { strings, colors, extra } = props;
    const { id, isHidden } = extra;
    const { text } = strings;

    return (
        <Container
            className='SectionHeader-container'
            data-testid='SectionHeader-container'
            colors={colors}
            hidden={isHidden}
        >
            <Wrapper>
                <Text id={id}>{text}</Text>
            </Wrapper>
        </Container>
    );
}

export default SectionHeader;
