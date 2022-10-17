import React from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@gdi/web-base-ui';
import { Container } from './ScreenLoader.style';
import './ScreenLoader.scss';

export type ScreenLoaderProps = {
    darkMode?: boolean;
    transparent?: boolean;
};

export function ScreenLoader(props: ScreenLoaderProps) {
    const { darkMode, transparent } = props;

    const className = classnames('ScreenLoader-container', {
        dark: darkMode,
    });

    return (
        <Container
            className={className}
            data-testid='ScreenLoader-container'
            transparent={transparent}
        >
            <CircularProgress />
        </Container>
    );
}

export default ScreenLoader;
