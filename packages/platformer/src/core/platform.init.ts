import thunk from 'redux-thunk';
import { ApiConfigBuilder } from '../builders/ApiConfigBuilder';
import { AxiosInstance } from 'axios';
import { firebase } from '../utils/firebase';
import { I18nBuilder } from '@gdi/language';
import { InitAppMethod, InitSapMethod, IPlatformState } from '../types';
import { notifyPubSub } from '@gdi/hooks';
import { platform } from '../store';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { RouterBuilder } from '../builders/RouterBuilder';
import { SelectorsBuilder } from '../builders/SelectorsBuilder';
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

const DEBUG = false;

type Params = {
    accountName: string;
    availableAccounts: string[];
    activeApps: string[];
    initAppMethods: Record<string, InitAppMethod>;
    activeSaps: string[];
    menuSections: string[];
    initSapMethods: Record<string, InitSapMethod>;
    sagas: any[];
    logger: LogMethod;
    noServerMode?: boolean;
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
    patchContext: (change: Partial<IPlatformState>) => void
) {
    const {
        accountName,
        availableAccounts = [],
        activeApps = [],
        initAppMethods = {},
        activeSaps = [],
        initSapMethods = {},
        menuSections = [],
        sagas = [],
        logger = defaultLogger,
        noServerMode,
    } = params;

    logger('platform: init');

    const storeBuilder = new StoreBuilder('main');
    const selectorsBuilder = new SelectorsBuilder();
    const routerBuilder = new RouterBuilder(menuSections);
    const widgetBuilder = new WidgetLibraryBuilder();
    const apiConfigBuilder = new ApiConfigBuilder();
    const i18nBuilder = new I18nBuilder();

    storeBuilder
        .withReducers('platform', platform.reducers)
        .withInitialState('platform', platform.initialState)
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
            storeBuilder: storeBuilder as any,
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
            storeBuilder: storeBuilder as any,
            selectorsBuilder,
        });
    }

    const endpointsConfigOverrides = apiConfigBuilder
        .withNoServer(noServerMode) //
        .build();

    const restAdapter = new RestAdapter({
        axios,
    });

    const firestoreAdapter = new FirestoreAdapter(firebase.value.app);

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

    logger('platform: sending PLATFORM_IS_READY');

    setTimeout(() => {
        patchContext({
            accountName,
            availableAccounts,
            routes: routing.routes,
            instancesByPage: routing.instancesByPage,
            menuItems: routing.menuItems,
            menuGroups: routing.menuGroups,
            contextBarItems: routing.contextBarItems,
            commandBarItems: routing.commandBarItems,
            widgetLibrary: widgetBuilder.build(),
            selectors: selectorsBuilder.build(),
            i18nKeys: resources,
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
