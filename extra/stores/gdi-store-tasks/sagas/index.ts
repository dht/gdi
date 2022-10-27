import { root as lifecycle } from './saga.lifecycle';
import { root as estimations } from '../../../apps/app-tasks/src/sagas/saga.estimations';
import { root as speech } from './saga.speech';

export const sagas = [lifecycle, estimations, speech];
