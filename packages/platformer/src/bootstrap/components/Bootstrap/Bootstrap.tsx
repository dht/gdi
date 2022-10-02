import { AllRoutes } from './Bootstrap.routes';
import { bootstrapApp } from './Bootstrap.code';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Theme, ScreenLoader, Prompt, Toast, Form } from '@gdi/web-ui';
import { Content, Version } from './Bootstrap.style';
import { init as initNavigation } from '../../sagas/saga.navigate';
import { Provider } from 'react-redux';
import { useMount } from 'react-use';
import { IPlatformConfig } from '../../../types';
import {
    PlatformContext,
    PlatformContextProvider,
} from '../../../core/platform-context';
import { I18nProvider } from '../../../i18n/i18n.provider';
import { $s } from 'shared-base';
import { useContext } from 'react';

export type BootstrapProps = {
    config: IPlatformConfig;
};

export const Bootstrap = (props: BootstrapProps) => {
    const { store, isReady, patchContext, isRtl } = useContext(PlatformContext);

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
                <I18nProvider>
                    <Router>
                        <Content isRtl={isRtl}>
                            <AllRoutes />
                        </Content>
                        <History />
                    </Router>
                    <Toast />
                    <Prompt formComponent={Form} />
                </I18nProvider>
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
    const { config } = props;
    const { version, initialRoute, noServerMode } = config;

    return (
        <PlatformContextProvider
            initialRoute={initialRoute}
            noServerMode={noServerMode}
        >
            <Bootstrap {...props} />
            <Version>{version}</Version>
        </PlatformContextProvider>
    );
};

export default BootstrapContainer;
