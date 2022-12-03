import React from 'react';
import { Wrapper, Text } from './GliLogo.style';
import classnames from 'classnames';

export type GliLogoProps = {
    text: string;
    animated: boolean;
};

export function GliLogo(props: GliLogoProps) {
    const { text, animated } = props;

    const fontSize = Math.max(30 - text.length / 2, 14);

    const className = classnames('GliLogo-wrapper', { animated });

    return (
        <Wrapper className={className} data-testid='GliLogo-wrapper'>
            <img src='/logo.png' />
            <Text size={fontSize}>{text}</Text>
        </Wrapper>
    );
}

export default GliLogo;
