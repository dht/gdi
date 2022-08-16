import { StoreBuilder } from 'redux-connected';
import { Action } from 'redux-store-generator';
import { SelectorsBuilder } from './store-builder/builders/SelectorsBuilder';
import type { ISelectorsByApp } from './store-builder/builders/SelectorsBuilder';
import { RouterBuilder } from './router/builders/RouterBuilder';
import {
    IWidgetInstancesByPageDictionary,
    IWidgets,
    WidgetLibraryBuilder,
} from 'igrid';
import { ApiConfigBuilder } from './api-builder/ApiConfigBuilder';
import { I18nBuilder } from './i18n/builders/I18nBuilder';

export type IAppConfig = {
    menuPresentation: IMenuItem;
};

type PageId = string;
type WidgetId = string;

/*************** ROUTING ***************/

export type IRoute = string;
export type IRoutes = Record<PageId, IRoute>;

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
    withCommand?: boolean;
    withAlt?: boolean;
    withShift?: boolean;
    withCtrl?: boolean;
};

export type IMenuItems = IMenuItem[];
export type IContextBarItems = IContextBarItem[];
export type ICommandBarItems = ICommandBarItem[];

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

export enum ActionTypes {
    SAGA_START = 'SAGA_START',
    SAGA_STOP = 'SAGA_STOP',
}

export type ISaga = any;
export type ISagas = Record<string, ISaga>;

export type ErrorCallback = (sagaId: string, error: string) => void;

export type Configuration = {
    sagas: ISagas;
    autoStart: string[];
    autoStartAll: boolean;
    onError: ErrorCallback;
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
    storeBuilder: StoreBuilder;
    selectorsBuilder: SelectorsBuilder;
    routerBuilder: RouterBuilder;
    widgetBuilder: WidgetLibraryBuilder;
    apiConfigBuilder: ApiConfigBuilder;
    i18nBuilder: I18nBuilder;
};

export type SapBuilders = {
    storeBuilder: StoreBuilder;
    selectorsBuilder: SelectorsBuilder;
};

export type InitAppMethod = (builders: AppBuilders) => void;
export type InitSapMethod = (builders: SapBuilders) => void;

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
    isRtl: boolean;
    locale: string;
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
};
