import React from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@gdi/web-base-ui';
import { Wrapper } from './ScreenLoader.style';
import './ScreenLoader.scss';

export type ScreenLoaderProps = {
    darkMode?: boolean;
    transparent?: boolean;
    spinnerColor?: string;
};

export function ScreenLoader(props: ScreenLoaderProps) {
    const { darkMode, transparent, spinnerColor } = props;

    const className = classnames('ScreenLoader-wrapper', {
        dark: darkMode,
    });

    return (
        <Wrapper
            className={className}
            data-testid='ScreenLoader-wrapper'
            transparent={transparent}
        >
            <CircularProgress color={spinnerColor} />
        </Wrapper>
    );
}

export default ScreenLoader;
