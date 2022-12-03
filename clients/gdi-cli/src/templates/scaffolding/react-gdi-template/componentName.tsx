import React from 'react';
import {
    Wrapper,
    Actions,
    CTA,
    Details,
    H1,
    Image,
    ImageWrapper,
    P,
    Slogan,
    Wrapper,
} from './$CMP.style';

export const id = 'com.usegdi.templates.basic.$CMPCC-simple';

export type $CMPProps = {
    strings: $CMPStrings;
    colors: $CMPColors;
    extra: $CMPExtra;
};

export type $CMPStrings = {
    ctaButtonText?: string;
};

export type $CMPColors = {};

export type $CMPExtra = {
    href: string;
};

export function $CMP(props: $CMPProps) {
    const { strings, colors, extra } = props;
    const { ctaButtonText } = strings;
    const { href = '#' } = extra;

    return (
        <Wrapper
            className="$CMP-wrapper"
            data-testid="$CMP-wrapper"
            colors={colors}
        >
            <Wrapper>
                <CTA colors={colors} href={href}>
                    {ctaButtonText}
                </CTA>
            </Wrapper>
        </Wrapper>
    );
}

export default $CMP;
