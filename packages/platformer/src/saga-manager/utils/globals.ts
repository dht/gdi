import { Configuration, Logger } from '../../types';

export let instances: any = {};

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
