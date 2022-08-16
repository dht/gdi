import thunk from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { InitAppMethod, InitSapMethod, PatchContextMethod } from './types';
import { notifyPubSub } from './hooks/usePubSub';
import { platform } from './stores/platform';
import { RouterBuilder } from './router/builders/RouterBuilder';
import { SelectorsBuilder } from './store-builder/builders/SelectorsBuilder';
import { WidgetLibraryBuilder } from 'igrid';
import {
    ConnectionType,
    EndpointConfig,
    initReduxConnected,
    RestAdapter,
    FirestoreAdapter,
    RetryStrategy,
    StoreBuilder,
} from 'redux-connected';
import type { IReduxConnectedConfig } from 'redux-connected';
import type { StoreStructure } from 'redux-store-generator';
import { ApiConfigBuilder } from './api-builder/ApiConfigBuilder';
import { PlatformLifeCycleEvents } from './core/platform-lifecycle';
import { I18nBuilder } from './i18n/builders/I18nBuilder';
import { initI18n } from './i18n/i18n.instance';

const DEBUG = false;

type Params = {
    activeApps: string[];
    initAppMethods: Record<string, InitAppMethod>;
    activeSaps: string[];
    menuSections: string[];
    initSapMethods: Record<string, InitSapMethod>;
    sagas: any[];
    logger: LogMethod;
};

const DEFAULT_ENDPOINT_CONFIG: EndpointConfig = {
    id: 'default',
    connectionType: ConnectionType.NONE,
    retryStrategy: RetryStrategy.X2_TIMES,
    requestsPerMinute: 12,
};

let store: any;

export async function initPlatform<T extends StoreStructure>(
    axios: AxiosInstance,
    params: Partial<Params>,
    patchContext: PatchContextMethod
) {
    const {
        activeApps = [],
        initAppMethods = {},
        activeSaps = [],
        initSapMethods = {},
        menuSections = [],
        sagas = [],
        logger = defaultLogger,
    } = params;

    logger('platform: init');

    const storeBuilder = new StoreBuilder('main');
    const selectorsBuilder = new SelectorsBuilder();
    const routerBuilder = new RouterBuilder(menuSections);
    const widgetBuilder = new WidgetLibraryBuilder();
    const apiConfigBuilder = new ApiConfigBuilder();
    const i18nBuilder = new I18nBuilder();

    storeBuilder
        .withReducers(platform.reducers)
        .withInitialState(platform.initialState)
        .withDevtoolsExtensions(true)
        .withMiddlewares(thunk)
        .withSagas(...sagas);

    logger('platform: iterating through apps');

    for (let appId of activeApps) {
        const initMethod = initAppMethods[appId];

        if (typeof initMethod !== 'function') {
            throw new Error(`could not find initAppMethod for app "${appId}"`);
        }

        logger(`platform: initMethod for ${appId}`);

        initMethod({
            storeBuilder,
            selectorsBuilder,
            routerBuilder,
            widgetBuilder,
            apiConfigBuilder,
            i18nBuilder,
        });
    }

    logger('platform: iterating through saps');

    for (let sapId of activeSaps) {
        const initMethod = initSapMethods[sapId];

        if (typeof initMethod !== 'function') {
            throw new Error(`could not find initSapMethod for sap "${sapId}"`);
        }

        logger(`platform: initMethod for ${sapId}`);

        initMethod({
            storeBuilder,
            selectorsBuilder,
        });
    }

    const endpointsConfigOverrides = apiConfigBuilder.build();

    const restAdapter = new RestAdapter({
        axios,
    });

    const firestoreAdapter = new FirestoreAdapter({
        apiKey: 'AIzaSyCf029JwrJoA-9CHtweZHqD0z-KXGNVnX8',
        authDomain: 'amazing-de4d0.firebaseapp.com',
        databaseURL: 'https://amazing-de4d0.firebaseio.com',
        projectId: 'amazing-de4d0',
        storageBucket: 'amazing-de4d0.appspot.com',
        messagingSenderId: '114773355011',
        appId: '1:114773355011:web:15a08553322f1cfa8c7c36',
    });

    logger('platform: configuring API', {
        default: DEFAULT_ENDPOINT_CONFIG,
        overrides: endpointsConfigOverrides,
    });

    const config: IReduxConnectedConfig = {
        defaultEndpointsConfig: DEFAULT_ENDPOINT_CONFIG,
        endpointsConfigOverrides,
        adapters: {
            rest: restAdapter,
            firestore: firestoreAdapter,
        },
        enableReduxDevtools: true,
        logger,
    };

    initReduxConnected(config, storeBuilder);

    const routing = routerBuilder.build();

    store = storeBuilder.build();

    const resources = i18nBuilder.build();

    await initI18n(resources);

    logger('platform: sending PLATFORM_IS_READY');

    setTimeout(() => {
        patchContext({
            routes: routing.routes,
            instancesByPage: routing.instancesByPage,
            menuItems: routing.menuItems,
            menuGroups: routing.menuGroups,
            contextBarItems: routing.contextBarItems,
            commandBarItems: routing.commandBarItems,
            widgetLibrary: widgetBuilder.build(),
            selectors: selectorsBuilder.build(),
            isReady: true,
            store,
        });
        notifyPubSub(PlatformLifeCycleEvents.PLATFORM_IS_READY);
    });
}

type LogMethod = (message: string, data?: Json) => void;

const defaultLogger: LogMethod = (message: string, data?: Json) => {
    if (!DEBUG) {
        return;
    }
    console.log(message, data);
};

export const getStore = () => store;
