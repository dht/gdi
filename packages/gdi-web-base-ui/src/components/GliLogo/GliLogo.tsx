import React from 'react';
import { Container, Text } from './GliLogo.style';
import classnames from 'classnames';

export type GliLogoProps = {
    text: string;
    animated: boolean;
};

export function GliLogo(props: GliLogoProps) {
    const { text, animated } = props;

    const fontSize = Math.max(30 - text.length / 2, 14);

    const className = classnames('GliLogo-container', { animated });

    return (
        <Container className={className} data-testid='GliLogo-container'>
            <img src='/logo.png' />
            <Text size={fontSize}>{text}</Text>
        </Container>
    );
}

export default GliLogo;
