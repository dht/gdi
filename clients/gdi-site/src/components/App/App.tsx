import React from 'react';
import { Container } from './App.style';
import { Theme } from '@gdi/web-ui';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useStore } from '../../hooks/useStore';
import { SiteContainer } from '../../containers/SiteContainer';

export type AppProps = {};

export function App(_props: AppProps) {
    const store = useStore();

    if (!store) {
        return null;
    }

    return (
        <Container className='App-container' data-testid='App-container'>
            <Theme>
                <Provider store={store}>
                    <Router>
                        <SiteContainer />
                    </Router>
                </Provider>
            </Theme>
        </Container>
    );
}

export default App;
