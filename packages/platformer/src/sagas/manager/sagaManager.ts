import { Configuration } from '../../types';
import { rootSaga } from './manager.root';
import { setConfig } from '../../utils/globals';

export function initSagaManager(config: Partial<Configuration>) {
    setConfig(config);
    return rootSaga;
}
