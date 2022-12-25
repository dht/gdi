import { APP_ID } from './ids';
import { appSagas } from '../sagas';
import { commandBarItems, contextBarItems, menuItems, routes } from './routes';
import { instances } from './instances';
import { widgets } from './widgets';
import { guidance } from '../store';
import i18n from './i18n';
import p from '../../package.json';

export const initSap = (
    builders: SapBuilders,
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
        .withReducers(APP_ID, guidance.reducers)
        .withInitialState(APP_ID, guidance.initialState)
        .withSagas(...appSagas)
        .withPostBuildHook(guidance.clearState);

    i18nBuilder //
        .withKeysByLanguage(APP_ID, i18n);

    selectorsBuilder //
        .withSelectors(APP_ID, guidance.selectors);

    apiConfigBuilder //
        .withEndpointsConfigOverrides(guidance.endpointsConfigOverrides(connectionType) as any); // prettier-ignore

    metaBuilder.withMeta(APP_ID, {
        version: p.version,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
        isDraft: p.gdi.isDraft,
        isBeta: p.gdi.isBeta,
    });
};
