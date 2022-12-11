import React, { useContext, useEffect, useMemo } from 'react';
import { $s } from 'shared-base';
import { AllRoutes } from './Bootstrap.routes';
import { bootstrapApp } from './Bootstrap.code';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Content, Version } from './Bootstrap.style';
import { Form, Prompt, ScreenLoader, Theme, Toast } from '@gdi/web-ui';
import { init as initNavigation } from '../../sagas/saga.navigate';
import { IPlatformConfig } from '../../types';
import { LanguageProvider } from '@gdi/language';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useMount } from 'react-use';
import {
    PlatformContext,
    PlatformContextProvider,
} from '../../core/Platform.context';
import { useStyledTheme } from '@gdi/hooks';
import { getLanguageCode, getIsRtl } from '@gdi/language';

export type BootstrapProps = {
    config: IPlatformConfig;
};

export const Bootstrap = (props: BootstrapProps) => {
    const { patchContext, state } = useContext(PlatformContext);
    const { store, isReady, i18nKeys, languageCode, isRtl } = state;

    useMount(() => {
        bootstrapApp(props, patchContext);
    });

    if (!isReady) {
        $s('<Bootstrap /> not ready');
        return <ScreenLoader darkMode={true} />;
    } else {
        $s('<Bootstrap /> ready');
    }

    return (
        <Theme>
            <Provider store={store}>
                <LanguageProvider
                    id='main'
                    keys={i18nKeys}
                    initialLanguageId={languageCode}
                >
                    <Router>
                        <Content>
                            <AllRoutes />
                        </Content>
                        <History />
                    </Router>
                    <Toast />
                    <Prompt formComponent={Form as any} isRtl={isRtl} />
                </LanguageProvider>
            </Provider>
        </Theme>
    );
};

function History() {
    const navigate = useNavigate();
    const { patchContext } = useContext(PlatformContext);

    useMount(() => {
        patchContext({ navigate });
        initNavigation(navigate);
    });

    return null;
}

export const BootstrapContainer = (props: BootstrapProps) => {
    const config = useMemo(
        () => ({
            ...props.config,
            languageCode: getLanguageCode(),
            isRtl: getIsRtl(),
        }),
        [props.config]
    );

    const { version, initialRoute, languageCode, isRtl } = config;
    const theme = useStyledTheme(languageCode, getIsRtl());

    const Cmp: any = ThemeProvider;

    return (
        <Cmp theme={theme}>
            <PlatformContextProvider
                initialRoute={initialRoute}
                languageCode={languageCode}
                isRtl={isRtl}
            >
                <Bootstrap config={config} />
                <Version>{version}</Version>
            </PlatformContextProvider>
        </Cmp>
    );
};

export default BootstrapContainer;
