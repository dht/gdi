import { fork } from 'saga-ts';
import { saga as sagaApi } from './saga.api';
import { saga as sagaMux } from './saga.mux';
import { saga as sagaVillage } from './saga.village';
import { saga as sagaKeys } from './saga.keys';
import { saga as sagaHome } from './saga.home';
import { saga as sagaIssues } from './saga.issues';
import { saga as sagaSettings } from './saga.settings';
import { saga as sagaNewBoard } from './saga.newBoard';

export const sagas = {
  'root.api': sagaApi,
  'root.mux': sagaMux,
  'root.village': sagaVillage,
  'root.keys': sagaKeys,
  'root.home': sagaHome,
  'root.issues': sagaIssues,
  'root.newBoard': sagaNewBoard,
  'root.settings': sagaSettings,
};
