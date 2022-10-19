import i18n from './i18n';
import { APP_ID } from './ids';
import { appSagas } from '../sagas';
import {
    commandBarItems,
    contextBarItems,
    menuItems,
    pieMenuItems,
    routes,
} from './routes';
import { instances } from './instances';
import { widgets } from './widgets';
import {
    clearState,
    endpointsConfig,
    initialState,
    initialStateSite,
    reducers,
    reducersSite,
    selectors,
} from '../store';
import { allDefinitions } from '../definitions';

export const initApp = (builders: AppBuilders) => {
    const {
        storeBuilder,
        selectorsBuilder,
        routerBuilder,
        widgetBuilder,
        apiConfigBuilder,
        i18nBuilder,
        definitionsBuilder,
        pieMenuBuilder,
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
        .withReducers('site', reducersSite)
        .withInitialState(APP_ID, initialState)
        .withInitialState('site', initialStateSite)
        .withSagas(...appSagas)
        .withPostBuildHook(clearState);

    i18nBuilder //
        .withKeysByLanguage(APP_ID, i18n);

    selectorsBuilder //
        .withSelectors(APP_ID, selectors);

    apiConfigBuilder //
        .withEndpointsConfigOverrides(endpointsConfig);

    definitionsBuilder.withDefinitions(allDefinitions);

    pieMenuBuilder.withPieMenuConfigs(APP_ID, pieMenuItems);
};
