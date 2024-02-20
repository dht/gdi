import { fork } from 'saga-ts';
import { saga as sagaApi } from './saga.api';
import { saga as sagaMux } from './saga.mux';
import { saga as sagaVillage } from './saga.village';

export const sagas = {
  'root.api': sagaApi,
  'root.mux': sagaMux,
  'root.village': sagaVillage,
};
