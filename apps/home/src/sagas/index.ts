import { fork } from 'saga-ts';
import { saga as sagaApi } from './saga.api';
import { saga as sagaKeys } from './saga.keys';
import { saga as sagaHome } from './saga.home';
import { saga as sagaIssues } from './saga.issues';
import { saga as sagaSettings } from './saga.settings';
import { saga as sagaNewBoard } from './saga.newBoard';

export const sagas = {
  'home.api': sagaApi,
  'home.keys': sagaKeys,
  'home.home': sagaHome,
  'home.issues': sagaIssues,
  'home.newBoard': sagaNewBoard,
  'home.settings': sagaSettings,
};
