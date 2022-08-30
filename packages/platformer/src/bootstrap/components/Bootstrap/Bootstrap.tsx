import { AllRoutes } from './Bootstrap.routes';
import { bootstrapApp } from './Bootstrap.code';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Theme, CommandBar, ContextBar, ScreenLoader } from '@gdi/web-ui';
import { Content, Version } from './Bootstrap.style';
import { init as initNavigation } from '../../sagas/saga.router';
import { Provider, useDispatch } from 'react-redux';
import { SideMenuContainer } from '../../containers/SideMenuContainer';
import { ToastBarContainer } from '../../containers/ToastBarContainer';
import { useCallback, useContext } from 'react';
import { useMount } from 'react-use';
import { ICommandBarItem, IPlatformConfig } from '../../../types';
import {
    PlatformContext,
    PlatformContextProvider,
} from '../../../core/platform-context';
import { I18nProvider } from '../../../i18n/i18n.provider';
import PromptContainer from '../../containers/PromptContainer';
import { $s } from 'shared-base';

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
                    <ToastBarContainer />
                    <PromptContainer />
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
