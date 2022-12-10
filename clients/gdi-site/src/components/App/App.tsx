import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './App.style';
import { Provider } from 'react-redux';
import { Theme } from '@gdi/web-ui';
import { ThemeProvider } from 'styled-components';
import { useStore } from '../../hooks/useStore';
import { useStyledTheme } from '@gdi/hooks';
import { SiteContainer } from '../../containers/SiteContainer';

export type AppProps = {};

export function App(_props: AppProps) {
    const store = useStore();

    const theme = useStyledTheme('en', false);

    if (!store) {
        return null;
    }

    const Cmp: any = ThemeProvider;

    return (
        <Wrapper className='App-wrapper' data-testid='App-wrapper'>
            <Cmp theme={theme}>
                <Theme>
                    <Provider store={store}>
                        <Router>
                            <SiteContainer />
                        </Router>
                    </Provider>
                </Theme>
            </Cmp>
        </Wrapper>
    );
}

export default App;
