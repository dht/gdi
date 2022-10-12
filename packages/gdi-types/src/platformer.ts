// AUTO-GENERATED

import { EndpointsConfigOverrides } from 'redux-connected';

export const A21 = {};

declare global {
    export type IAppConfig = {
        menuPresentation: IMenuItem;
    };

    export type Action = {
        type: string;
        id?: string;
        payload?: Json;
    };

    /*************** ROUTING ***************/

    export type IRoute = string;
    export type IRoutes = Record<PageId, IRoute>;

    /*************** SAGA-MANAGER ***************/
    export enum SagaStatus {
        NONE = 'NONE',
        RUNNING = 'RUNNING',
        STOPPED = 'STOPPED',
        ERROR = 'ERROR',
    }

    export type ISagaState = {
        id: string;
        startTs?: number;
        stoppedTs?: number;
        ErrorTs?: number;
        error?: string;
    };

    export type ISagasState = Record<string, ISagaState>;

    export type SagaStore = {
        sagas: ISagasState;
    };

    export enum ActionTypes {
        SAGA_START = 'SAGA_START',
        SAGA_STOP = 'SAGA_STOP',
    }

    export type ISaga = any;
    export type ISagas = Record<string, ISaga>;

    export type IErrorCallback = (sagaId: string, error: string) => void;

    export type Configuration = {
        sagas: ISagas;
        autoStart: string[];
        autoStartAll: boolean;
        onError: IErrorCallback;
        logger: Logger;
    };

    export type SagaAction = {
        type: ActionTypes;
        sagaId: string;
    };

    export type Logger = {
        log: (message: string) => void;
    };

    /*************** GLOBAL ***************/
    export type AppBuilders = {
        storeBuilder: IStoreBuilder;
        selectorsBuilder: ISelectorsBuilder;
        routerBuilder: IRouterBuilder;
        widgetBuilder: IWidgetLibraryBuilder;
        apiConfigBuilder: IApiConfigBuilder;
        i18nBuilder: II18nBuilder;
    };

    export type SapBuilders = {
        storeBuilder: IStoreBuilder;
        selectorsBuilder: ISelectorsBuilder;
    };

    export type InitAppMethod = (builders: AppBuilders) => void;
    export type InitSapMethod = (builders: SapBuilders) => void;

    export enum PlatformLifeCycleEvents {
        PLATFORM_IS_READY = 'PLATFORM_IS_READY',
        AUTHENTICATION_START = 'AUTHENTICATION_START',
        AUTHENTICATION_COMPLETED = 'AUTHENTICATION_COMPLETED',
    }

    export type IFirebaseConfig = {
        apiKey: string;
        authDomain: string;
        databaseURL: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
        measurementId: string;
    };

    export type IPlatformContextState = {
        isReady: boolean;
        noServerMode?: boolean;
        locale: string;
        isRtl: boolean;
        routes: IRoutes;
        initialRoute: string;
        menuItems: IMenuItems;
        menuGroups: string[];
        instancesByPage: IWidgetInstancesByPageDictionary;
        contextBarItems: IContextBarItems;
        commandBarItems: ICommandBarItems;
        store: any;
        navigate: any;
        selectors: ISelectorsByApp;
        widgetLibrary: IWidgets;
        patchContext: PatchContextMethod;
    };

    export type PatchContextMethod = (
        change: Partial<IPlatformContextState>
    ) => void;

    export enum SagaEvents {
        API_ROOT_DONE = 'API_ROOT_DONE',
        TOGGLE_DEV_MODE = 'TOGGLE_DEV_MODE',
        SAGA_ERROR = 'SAGA_ERROR',
    }

    export type ILog = {
        id: string;
        ts: number;
        message: string;
        referenceId?: string;
        isRunning?: boolean;
        success?: boolean;
        error?: string;
        data?: Json;
    };

    export type ILogs = ILog[];

    export type IPlatformConfig = {
        version: string;
        initialRoute: string;
        baseURL: string;
        firebaseConfig: IFirebaseConfig;
        initializers: Record<string, InitAppMethod>;
        activeApps: string[];
        menuSections: string[];
        noServerMode?: boolean;
    };

    export type GoogleUser = Json & {
        uid: string;
        displayName: string | null;
        email: string | null;
        emailVerified: boolean;
        phoneNumber: string | null;
        photoURL: string | null;
        providerId: string;
    };

    /*************** SelectorsBuilder ***************/
    export type ISelector = (state: any) => any;
    export type ISelectors = Record<SelectorName, ISelector>;
    export type ISelectorsBucket = Record<CategoryId, ISelectors>;
    export type ISelectorsByApp = Record<AppId, ISelectorsBucket>;

    export type AppId = string;
    export type CategoryId = string;
    export type SelectorName = string;

    export interface ISelectorsBuilder {
        withSelectors: (
            appId: string,
            selectorsBucket: ISelectorsBucket
        ) => ISelectorsBuilder;
        build: () => ISelectorsByApp;
    }

    /*************** StoreBuilder ***************/
    export type HookCallback = (store: any) => void;

    export interface IStoreBuilder {
        withInitialState: (initialState?: Json) => IStoreBuilder;
        withPreBuildHook: (callback: HookCallback) => IStoreBuilder;
        withPostBuildHook: (callback: HookCallback) => IStoreBuilder;
        withReducers: (reducers: any) => IStoreBuilder;
        withMiddlewares: (middlewares: any | any[]) => IStoreBuilder;
        withEnhancers: (enhancers: any | any[]) => IStoreBuilder;
        withPreMiddlewares: (...middlewares: any) => IStoreBuilder;
        withPostMiddlewares: (...middlewares: any) => IStoreBuilder;
        withSagas: (...sagas: any) => IStoreBuilder;
        withSagaMonitor: (sagaMonitor: any) => IStoreBuilder;
        withSagaContext: (context: any) => IStoreBuilder;
        clearSagas: () => IStoreBuilder;
        withDevtoolsExtensions: (enable?: boolean) => IStoreBuilder;
        build<T = any>(): T;
    }

    /*************** RouteBuilder ***************/
    export interface IRouterBuilder {
        withRoutes: (appId: string, routes: IRoutes) => IRouterBuilder;
        withInstances:(appId: string, instances: IWidgetInstancesByPageList, options?: any) => IRouterBuilder; // prettier-ignore
        withMenu: (appId: string, menuItems: IMenuItems) => IRouterBuilder;
        withContextBar: (appId: string, contextBarItems: IContextBarItems) => IRouterBuilder; // prettier-ignore
        withCommandBar: (appId: string, commandBarItems: ICommandBarItems) => IRouterBuilder; // prettier-ignore
        build: () => RouterBuilderResponse;
    }

    export type RouterBuilderResponse = {
        routes: IRoutes;
        menuItems: IMenuItems;
        menuGroups: string[];
        contextBarItems: IContextBarItems;
        commandBarItems: ICommandBarItems;
        instancesByPage: IWidgetInstancesByPageDictionary;
    };

    export type CommandBarAction = {
        type: string;
        payload?: {
            contextBarItemId?: string;
        };
    };

    /*************** I18nBuilder ***************/
    export interface II18nBuilder {
        withLanguage: (
            appId: string,
            language: string,
            data: Json
        ) => II18nBuilder;
        withKeysByLanguage: (
            appId: string,
            keysByLanguage: Json
        ) => II18nBuilder;
        build: () => Json;
    }

    /*************** IApiConfigBuilder ***************/
    export interface IApiConfigBuilder {
        withEndpointsConfigOverrides:(overrides: EndpointsConfigOverrides) => IApiConfigBuilder; // prettier-ignore
        build: () => EndpointsConfigOverrides;
    }

    /*************** Menu & ContextBar ***************/
    export type IContextBarItem = {
        id: string;
        label: string;
        widgetId: string;
        responsive?: boolean;
        icon?: string;
    };

    export type ICommandBarItem = {
        id: string;
        label: string;
        action: Action;
        shortKeys?: IShortKey[];
    };

    export type IShortKey = {
        key: string;
        id?: string;
        withCommand?: boolean;
        withAlt?: boolean;
        withShift?: boolean;
        withCtrl?: boolean;
        description?: string;
    };

    export type IContextBarItems = IContextBarItem[];
    export type ICommandBarItems = ICommandBarItem[];

    export type IMenuItem = {
        path: string;
        label: string;
        icon?: string;
        hidden?: boolean;
        disabled?: boolean;
        showOnSlim?: boolean;
        groupId?: string;
        order?: number;
        children?: IMenuItem[];
    };

    export type IMenuItems = IMenuItem[];
}
