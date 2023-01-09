import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './App.style';
import { Provider } from 'react-redux';
import { Theme } from '@gdi/web-ui';
import { ThemeProvider } from 'styled-components';
import { store } from '@gdi/blkr';
import { useStyledTheme } from '@gdi/hooks';

export type AppProps = {
    children?: React.ReactNode;
};

export function App(props: AppProps) {
    const theme = useStyledTheme('en', false);

    const Cmp: any = ThemeProvider;

    return (
        <Wrapper className='App-wrapper' data-testid='App-wrapper'>
            <Cmp theme={theme}>
                <Theme>
                    <Provider store={store}>
                        <Router>{props.children}</Router>
                    </Provider>
                </Theme>
            </Cmp>
        </Wrapper>
    );
}

export default App;
