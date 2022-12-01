import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './App.style';
import { Provider } from 'react-redux';
import { SiteContainer } from '../../containers/SiteContainer';
import { Theme } from '@gdi/web-ui';
import { ThemeProvider } from 'styled-components';
import { useStore } from '../../hooks/useStore';
import { useStyledTheme } from '@gdi/hooks';

export type AppProps = {};

export function App(_props: AppProps) {
    const store = useStore();

    const theme = useStyledTheme('en', false);

    if (!store) {
        return null;
    }

    const Cmp: any = ThemeProvider;

    return (
        <Container className='App-container' data-testid='App-container'>
            <Cmp theme={theme}>
                <Theme>
                    <Provider store={store}>
                        <Router>
                            <SiteContainer />
                        </Router>
                    </Provider>
                </Theme>
            </Cmp>
        </Container>
    );
}

export default App;
