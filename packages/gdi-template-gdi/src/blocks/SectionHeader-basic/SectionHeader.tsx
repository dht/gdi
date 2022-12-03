import React from 'react';
import { Wrapper, Container, Text } from './SectionHeader.style';

export const id = 'com.usegdi.templates.gdi.sectionHeader-basic';

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
    href?: string;
    isHidden?: boolean;
};

export function SectionHeader(props: SectionHeaderProps) {
    const { strings, colors, extra } = props;
    const { id, isHidden } = extra;
    const { text } = strings;

    return (
        <Wrapper
            className='SectionHeader-wrapper'
            data-testid='SectionHeader-wrapper'
            colors={colors}
            hidden={isHidden}
        >
            <Container>
                <Text id={id}>{text}</Text>
            </Container>
        </Wrapper>
    );
}

export default SectionHeader;
