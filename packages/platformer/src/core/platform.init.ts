import platformI18n from '../i18n';
import thunk from 'redux-thunk';
import { ApiConfigBuilder } from '../builders/ApiConfigBuilder';
import { DefinitionsBuilder } from '../builders/DefinitionsBuilder';
import { delay, invokeEvent } from 'shared-base';
import { firebase } from '../utils/firebase';
import { getDemoConfig } from '../utils/demo';
import { I18nBuilder, objectTranslate as to } from '@gdi/language';
import { MetaBuilder } from '../builders/MetaBuilder';
import { notifyPubSub } from '@gdi/hooks';
import { PieMenuBuilder } from '../builders/PieMenuBuilder';
import { platform } from '../store';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { RouterBuilder } from '../builders/RouterBuilder';
import { SelectorsBuilder } from '../builders/SelectorsBuilder';
import { WidgetLibraryBuilder } from 'igrid';
import {
    IContextBarItems,
    InitAppMethod,
    InitSapMethod,
    IPlatformState,
} from '../types';
import {
    EndpointConfig,
    initReduxConnected,
    RestAdapter,
    FirestoreAdapter,
    LocalStorageAdapter,
    RetryStrategy,
    StoreBuilder,
    ConnectionType,
    registerRestAdapter,
} from 'redux-connected';
import type { IReduxConnectedConfig } from 'redux-connected';
import { setPlatformState } from '../utils/globals';

const DEBUG = false;

type Params = {
    accountName: string;
    availableAccounts: string[];
    activeApps: string[];
    initAppMethods: Record<string, InitAppMethod>;
    activeSaps: string[];
    initSapMethods: Record<string, InitSapMethod>;
    menuSections: string[];
    sagas: any[];
    logger: LogMethod;
    languageCode?: LanguageIso;
    connectionType?: ConnectionType;
};

const DEFAULT_ENDPOINT_CONFIG: EndpointConfig = {
    id: 'default',
    connectionType: ConnectionType.NONE,
    retryStrategy: RetryStrategy.X2_TIMES,
    requestsPerMinute: 12,
};

let store: any;

export async function initPlatform(
    params: Partial<Params>,
    patchContext: (change: Partial<IPlatformState>) => void
) {
    const {
        accountName,
        availableAccounts = [],
        initAppMethods = {},
        activeSaps = [],
        initSapMethods = {},
        menuSections = [],
        sagas = [],
        logger = defaultLogger,
        languageCode = 'en',
        connectionType = ConnectionType.NONE,
    } = params;

    let activeApps = params.activeApps ?? [];

    logger('platform: init');

    const storeBuilder = new StoreBuilder('main');
    const selectorsBuilder = new SelectorsBuilder();
    const routerBuilder = new RouterBuilder(menuSections);
    const widgetBuilder = new WidgetLibraryBuilder();
    const apiConfigBuilder = new ApiConfigBuilder();
    const i18nBuilder = new I18nBuilder();
    const definitionsBuilder = new DefinitionsBuilder();
    const pieMenuBuilder = new PieMenuBuilder();
    const metaBuilder = new MetaBuilder();

    storeBuilder
        .withReducers('platform', platform.reducers)
        .withInitialState('platform', platform.initialState)
        .withDevtoolsExtensions(true)
        .withMiddlewares(thunk)
        .withSagas(...sagas);

    i18nBuilder.withKeysByLanguage('platform', platformI18n);

    logger('platform: iterating through apps');

    for (let appId of activeApps) {
        const initMethod = initAppMethods[appId];

        if (typeof initMethod !== 'function') {
            throw new Error(`could not find initAppMethod for app "${appId}"`);
        }

        logger(`platform: initMethod for ${appId}`);

        initMethod(
            {
                storeBuilder: storeBuilder as any,
                selectorsBuilder,
                routerBuilder,
                widgetBuilder,
                apiConfigBuilder,
                i18nBuilder,
                definitionsBuilder,
                pieMenuBuilder,
                metaBuilder,
            },
            connectionType
        );
    }

    logger('platform: iterating through saps');

    for (let sapId of activeSaps) {
        const initMethod = initSapMethods[sapId];

        if (typeof initMethod !== 'function') {
            throw new Error(`could not find initSapMethod for sap "${sapId}"`);
        }

        logger(`platform: initMethod for ${sapId}`);

        initMethod(
            {
                storeBuilder: storeBuilder as any,
                selectorsBuilder,
                routerBuilder,
                widgetBuilder,
                apiConfigBuilder,
                i18nBuilder,
                definitionsBuilder,
                pieMenuBuilder,
                metaBuilder,
            },
            connectionType
        );
    }

    const endpointsConfigOverrides = apiConfigBuilder.build();

    const demoConfig = getDemoConfig();

    const firestoreAdapter = new FirestoreAdapter(firebase.value.app);
    const localStorageAdapter = new LocalStorageAdapter(demoConfig);
    await localStorageAdapter.init();

    logger('platform: configuring API', {
        default: DEFAULT_ENDPOINT_CONFIG,
        overrides: endpointsConfigOverrides,
    });

    const config: IReduxConnectedConfig = {
        defaultEndpointsConfig: DEFAULT_ENDPOINT_CONFIG,
        endpointsConfigOverrides,
        adapters: {
            firestore: firestoreAdapter,
            localStorage: localStorageAdapter,
        },
        enableReduxDevtools: true,
        logger,
    };

    initReduxConnected(config, storeBuilder);

    store = storeBuilder.build();

    const resources = i18nBuilder.build();

    const routing = routerBuilder.build();

    logger('platform: sending PLATFORM_IS_READY');

    const i18nParams = {
        languageCode,
        keys: resources,
    };

    const crudDefinitionsPerApp = definitionsBuilder.build();
    const crudDefinitions = to.definitions(crudDefinitionsPerApp, i18nParams);

    const { on } = getDemoConfig();

    const platformState: Partial<IPlatformState> = {
        accountName: accountName ?? '',
        availableAccounts,
        routes: routing.routes,
        instancesByPage: routing.instancesByPage,
        menuItems: to.menu(routing.menuItems, i18nParams) as any,
        menuGroups: routing.menuGroups,
        contextBarItems: to.contextBar(
            routing.contextBarItems,
            i18nParams
        ) as any,
        commandBarItems: to.commandBar(
            routing.commandBarItems as any,
            i18nParams
        ) as any,
        widgetLibrary: widgetBuilder.build(),
        selectors: selectorsBuilder.build(),
        crudDefinitions,
        pieMenuConfig: to.pieMenu(pieMenuBuilder.build(), i18nParams),
        templatesMeta: metaBuilder.build(),
        i18nKeys: resources,
        isReady: true,
        store,
        demoMode: on,
        languageCode,
    };

    setPlatformState(platformState);

    setTimeout(() => {
        patchContext(platformState);
        showInitialContextBarItems(routing.contextBarItems);
        notifyPubSub(PlatformLifeCycleEvents.PLATFORM_IS_READY);
    });
}

export const setRestAdapter = (adapterId: string, adapter: RestAdapter) => {
    registerRestAdapter(adapterId, adapter);
};

type LogMethod = (message: string, data?: Json) => void;

const defaultLogger: LogMethod = (message: string, data?: Json) => {
    if (!DEBUG) {
        return;
    }
    console.log(message, data);
};

const showInitialContextBarItems = async (
    contextBarItems: IContextBarItems
) => {
    await delay(10);

    contextBarItems
        .filter((i) => i.showOnStart)
        .forEach((i) => {
            invokeEvent('ADD_ITEM_TO_CONTEXT_BAR', {
                contextBarItemId: i.id,
            });
        });
};

export const getStore = () => store;
