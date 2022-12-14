import { initializeIcons, ThemeProvider } from '@fluentui/react';
import React from 'react';
import { theme } from './dark.complete';

initializeIcons();

export type ThemeProps = {
    children: JSX.Element;
};

export function Theme(props: ThemeProps) {
    return (
        <ThemeProvider theme={theme} className='theme'>
            {props.children}
        </ThemeProvider>
    );
}

export default Theme;
