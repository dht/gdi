import React, { useCallback, useContext, useReducer } from 'react';
import { ContextBar, Switcher } from '@gdi/web-ui';
import { PlatformContext } from '../../core/platform-context';
import { sortBy } from 'shared-base';

type SwitcherContainerProps = {};

export function SwitcherContainer(_props: SwitcherContainerProps) {
    const { routes, instancesByPage, widgetLibrary } =
        useContext(PlatformContext);

    const screens = Object.keys(routes)
        .filter((routeKey) => {
            return (
                !routes[routeKey].includes(':') &&
                !routeKey.includes('Modal') &&
                !routeKey.includes('Drawer') &&
                !routeKey.includes('login')
            );
        })
        .map((routeKey) => {
            const instances = instancesByPage[routeKey] || {};
            const firstWidget = Object.values(instances)[0] || {};

            const { widgetId = '' } = firstWidget;

            if (Object.keys(firstWidget).length === 0) {
                return;
            }

            const widget = widgetLibrary[widgetId] || {};
            const { name = '', description = '' } = widget;
            const appName = widgetId.split('.')[0];

            return {
                id: routeKey,
                route: routes[routeKey],
                name,
                description,
                appName,
            };
        })
        .filter((i) => i)
        .sort(sortBy('name', 'asc'));

    return <Switcher screens={screens} />;
}
