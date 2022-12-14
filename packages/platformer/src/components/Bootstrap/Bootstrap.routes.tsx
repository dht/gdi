import { useContext, useEffect, useMemo } from 'react';
import { $s, invokeEvent } from 'shared-base';
import { AccountTagContainer } from '../../containers/AccountTagContainer';
import { AppContent } from './Bootstrap.style';
import { AppContextProvider } from '@gdi/language';
import { CommandBar } from '@gdi/web-ui';
import { ContextBarContainer } from '../../containers/ContextBarContainer';
import { createPage } from '../Page/Page';
import { DemoModeContainer } from '../../containers/DemoModeContainer';
import { firebase } from '../../utils/firebase';
import { ICommandBarItem } from '../../types';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { OverlayContainer } from '../../containers/OverlayContainer';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { PlatformContext } from '../../core/Platform.context';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { SideMenuContainer } from '../../containers/SideMenuContainer';
import { SwitcherContainer } from '../../containers/SwitcherContainer';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import {
    IWidgetInstance,
    IWidgetInstancesByPageDictionary,
    IWidgetInstancesList,
} from 'igrid';

export const MainRoutes = () => {
    const { routes, initialRoute = '/home' } = useContext(PlatformContext).state; // prettier-ignore

    const routesComponents = useMemo(() => {
        return Object.keys(routes)
            .filter((key) => isMainRoute(key))
            .map((pageId) => {
                const path = routes[pageId];
                const Cmp = createPage(pageId);
                return (
                    <Route key={path} path={`${path}/*`} element={<Cmp />} />
                );
            });
    }, []);

    return (
        <Routes>
            {routesComponents}
            <Route
                key='redirect'
                path='/'
                element={<Navigate replace to={initialRoute} />}
            />
            <Route key='fallback' path='*' element={<Fallback />} />
        </Routes>
    );
};

export const App = () => {
    const dispatch = useDispatch();
    const { contextBarItems, widgetLibrary, commandBarItems, demoMode } =
        useContext(PlatformContext).state;

    useMount(() => {
        dispatch({
            type: PlatformLifeCycleEvents.AUTHENTICATION_START,
            demoMode,
        });
    });

    function onCommandBar(command: ICommandBarItem) {
        const { event } = command;

        if (!event) {
            return;
        }
        const { type, payload = {} } = event;
        invokeEvent(type, payload);
    }

    return (
        <AppContent className='AppContainer-wrapper'>
            <MainRoutes />
            <AppContextProvider appId='platform'>
                <OverlayRoutes />
                <SideMenuContainer />
                <SwitcherContainer />
                <DemoModeContainer />
                <ContextBarContainer
                    contextBarItems={contextBarItems}
                    widgetLibrary={widgetLibrary}
                />
                <AccountTagContainer />
                <CommandBar
                    items={commandBarItems as any}
                    onRun={onCommandBar}
                />
            </AppContextProvider>
        </AppContent>
    );
};

export const AllRoutes = () => {
    const { routes } = useContext(PlatformContext).state;
    const location = useLocation();

    useMount(() => {
        $s('all routes');
    });

    useEffect(() => {
        firebase.log('page_view');
    }, [location]);

    return (
        <Routes>
            {Object.keys(routes)
                .filter((key) => isPreApp(key))
                .map((pageId) => {
                    const path = routes[pageId];
                    const Cmp = createPage(pageId);

                    return (
                        <Route
                            key={path}
                            path={`${path}/*`}
                            element={<Cmp />}
                        />
                    );
                })}
            <Route key='fallback' path='*' element={<App />} />
        </Routes>
    );
};

export function OverlayRoutes() {
    const { instancesByPage, widgetLibrary } =
        useContext(PlatformContext).state;

    const overlayInstances = useMemo(
        () => instanceByPageToOverlays(instancesByPage),
        []
    );

    function renderOverlay(widgetId: string, title?: string) {
        const widget = widgetLibrary[widgetId];
        const isModal = widgetId.toLowerCase().includes('modal');

        return (
            <OverlayContainer isModal={isModal} title={title}>
                {widget.component ? widget.component() : <></>}
            </OverlayContainer>
        );
    }

    function renderOverlayRoute(overlay: IWidgetInstance) {
        const { widgetId, overlayRoute, title } = overlay;

        return (
            <Route
                key={overlayRoute}
                path={overlayRoute!}
                element={renderOverlay(widgetId, title)}
            />
        );
    }

    return (
        <Routes>
            {overlayInstances.map((overlay) => renderOverlayRoute(overlay))}
            <Route key='fallback' path='*' element={<Empty />} />
        </Routes>
    );
}

const isMainRoute = (key: string) => !isOverlayRoute(key) && !isPreApp(key); // prettier-ignore
const isOverlayRoute = (key: string) => key.match(/Drawer$/) || key.match(/Modal$/); // prettier-ignore

const isPreApp = (key: string) =>
    key.match(/oAuth$/) || //
    key.match(/login$/) ||
    key.match(/static$/);

function Empty() {
    return <></>;
}

export const Fallback = () => {
    return <PageNotFound />;
};

function instanceByPageToOverlays(
    instancesByPage: IWidgetInstancesByPageDictionary
): IWidgetInstancesList {
    const output: IWidgetInstancesList = [];

    Object.keys(instancesByPage).forEach((page) => {
        output.push(...Object.values(instancesByPage[page]));
    });

    return output.filter((instance: IWidgetInstance) => {
        return isOverlayRoute(instance.widgetId);
    });
}
