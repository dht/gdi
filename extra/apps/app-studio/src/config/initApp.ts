import { APP_ID } from './ids';
import { appSagas } from '../sagas';
import { clearState, endpointsConfig, initialState, reducers } from '../store';
import { selectors } from '../selectors';
import { instances } from './instances';
import { routes, menuItems, commandBarItems, contextBarItems } from './routes';
import { widgets } from './widgets';
import type { AppBuilders } from '@gdi/platformer';
import i18n from './i18n';

export const initAppStudio = (builders: AppBuilders) => {
    const {
        storeBuilder,
        selectorsBuilder,
        routerBuilder,
        widgetBuilder,
        apiConfigBuilder,
        i18nBuilder,
    } = builders;

    routerBuilder
        .withRoutes(APP_ID, routes)
        .withInstances(APP_ID, instances, { addHeader: true })
        .withContextBar(APP_ID, contextBarItems)
        .withMenu(APP_ID, menuItems)
        .withCommandBar(APP_ID, commandBarItems);

    widgetBuilder //
        .withWidgets(widgets);

    storeBuilder
        .withReducers(APP_ID, reducers)
        .withInitialState(APP_ID, initialState)
        .withSagas(...appSagas)
        .withPostBuildHook(clearState);

    i18nBuilder //
        .withKeysByLanguage(APP_ID, i18n);

    selectorsBuilder //
        .withSelectors(APP_ID, selectors);

    apiConfigBuilder //
        .withEndpointsConfigOverrides(endpointsConfig);
};
