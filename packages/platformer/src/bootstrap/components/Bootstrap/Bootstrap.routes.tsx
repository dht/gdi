import { createPage } from '../Page/Page';
import { OverlayContainer } from '../../containers/OverlayContainer';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import {
    IWidgetInstance,
    IWidgetInstancesByPageDictionary,
    IWidgetInstancesList,
} from 'igrid';
import useMount from 'react-use/lib/useMount';
import { useDispatch } from 'react-redux';
import { PlatformContext } from '../../../core/platform-context';
import { PlatformLifeCycleEvents } from '../../../core/platform-lifecycle';

export const MainRoutes = () => {
    const { routes, initialRoute = '/home' } = useContext(PlatformContext);

    return (
        <Routes>
            {Object.keys(routes)
                .filter((key) => isMainRoute(key))
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

    useMount(() => {
        dispatch({ type: PlatformLifeCycleEvents.AUTHENTICATION_START });
    });

    return (
        <>
            <MainRoutes />
            <OverlayRoutes />
        </>
    );
};

export const AllRoutes = () => {
    const { routes } = useContext(PlatformContext);

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
    const { instancesByPage, widgetLibrary } = useContext(PlatformContext);

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
    return <div>page not found</div>;
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
