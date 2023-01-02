import { Configuration, Logger } from '../types';

export let instances: any = {};

export let platformState: IPlatformState = {
    isReady: false,
    languageCode: 'en',
    isRtl: false,
    routes: {},
    initialRoute: '',
    accountName: '',
    availableAccounts: [],
    menuItems: [],
    menuGroups: [],
    instancesByPage: {},
    contextBarItems: [],
    commandBarItems: [],
    store: null,
    navigate: null,
    selectors: {},
    widgetLibrary: {},
    i18nKeys: {} as any,
    pieMenuConfig: {},
    crudDefinitions: {},
    templatesMeta: {},
    analyticsOn: false,
    demoMode: false,
};

let logger: Logger = {
    log: (message: string) => console.log(message),
};

const defaultOnError = (sagaId: string, error: string) => {
    logger.log(`${sagaId}: ${error}`);
};

const defaultConfig: Configuration = {
    sagas: {},
    autoStart: [],
    autoStartAll: false,
    onError: defaultOnError,
    logger,
};

export const getPlatformState = () => {
    return platformState;
};

export const setPlatformState = (state: Partial<IPlatformState>) => {
    platformState = state as IPlatformState;
};

export const config = { ...defaultConfig };

// ============= setter =============
export const setConfig = (value: Partial<Configuration>) => {
    const { sagas, autoStart, autoStartAll, logger, onError } = value;

    if (sagas) { config.sagas = sagas } // prettier-ignore
    if (autoStart) { config.autoStart = autoStart } // prettier-ignore
    if (autoStartAll) { config.autoStartAll = autoStartAll } // prettier-ignore
    if (logger) { config.logger = logger } // prettier-ignore
    if (onError) { config.onError = onError } // prettier-ignore
};
