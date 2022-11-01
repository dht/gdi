import thunk from 'redux-thunk';
import { ApiConfigBuilder } from '../builders/ApiConfigBuilder';
import { AxiosInstance } from 'axios';
import { firebase } from '../utils/firebase';
import { I18nBuilder, objectTranslate as to } from '@gdi/language';
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
import { DefinitionsBuilder } from '../builders/DefinitionsBuilder';
import { PieMenuBuilder } from '../builders/PieMenuBuilder';
import platformI18n from '../i18n';

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
    languageCode?: LanguageIso;
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
        languageCode = 'en',
    } = params;

    logger('platform: init');

    const storeBuilder = new StoreBuilder('main');
    const selectorsBuilder = new SelectorsBuilder();
    const routerBuilder = new RouterBuilder(menuSections);
    const widgetBuilder = new WidgetLibraryBuilder();
    const apiConfigBuilder = new ApiConfigBuilder();
    const i18nBuilder = new I18nBuilder();
    const definitionsBuilder = new DefinitionsBuilder();
    const pieMenuBuilder = new PieMenuBuilder();

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

        initMethod({
            storeBuilder: storeBuilder as any,
            selectorsBuilder,
            routerBuilder,
            widgetBuilder,
            apiConfigBuilder,
            i18nBuilder,
            definitionsBuilder,
            pieMenuBuilder,
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

    setTimeout(() => {
        patchContext({
            accountName,
            availableAccounts,
            routes: routing.routes,
            instancesByPage: routing.instancesByPage,
            menuItems: to.menu(routing.menuItems, i18nParams),
            menuGroups: routing.menuGroups,
            contextBarItems: to.contextBar(routing.contextBarItems, i18nParams),
            commandBarItems: to.commandBar(routing.commandBarItems, i18nParams),
            widgetLibrary: widgetBuilder.build(),
            selectors: selectorsBuilder.build(),
            crudDefinitions,
            pieMenuConfig: to.pieMenu(pieMenuBuilder.build(), i18nParams),
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
