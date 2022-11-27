import i18n from './i18n';
import p from '../../package.json';
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
    reducers,
    selectors,
} from '../store';
import { allDefinitions } from '../definitions';

export const initApp = (
    builders: AppBuilders,
    connectionType: ConnectionType
) => {
    const {
        storeBuilder,
        selectorsBuilder,
        routerBuilder,
        widgetBuilder,
        apiConfigBuilder,
        i18nBuilder,
        metaBuilder,
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
        .withInitialState(APP_ID, initialState)
        .withSagas(...appSagas)
        .withPostBuildHook(clearState);

    i18nBuilder //
        .withKeysByLanguage(APP_ID, i18n);

    selectorsBuilder //
        .withSelectors(APP_ID, selectors);

    // apiConfigBuilder //
    //     .withEndpointsConfigOverrides(endpointsConfig(connectionType));

    metaBuilder.withMeta(APP_ID, {
        version: p.version,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
        isDraft: p.gdi.isDraft,
        isBeta: p.gdi.isBeta,
    });

    definitionsBuilder.withDefinitions(APP_ID, allDefinitions);

    pieMenuBuilder.withPieMenuConfigs(APP_ID, pieMenuItems);
};
