import { saga as sagaApi } from './saga.api';
import { saga as sagaAssets } from './saga.assets';
import { saga as sagaBar } from './saga.bar';
import { saga as sagaBoard } from './saga.board';
import { saga as sagaGdi } from './saga.gdi';
import { saga as sagaErrors } from './saga.errors';
import { saga as sagaKeys } from './saga.keys';
import { saga as sagaLogs } from './saga.logs';
import { saga as sagaNavigation } from './saga.navigation';
import { saga as sagaOnboarding } from './saga.onboarding';
import { saga as sagaPredicates } from './saga.predicates';
import { saga as sagaRoot } from './saga.root';
import { saga as sagaTags } from './saga.tags';
import { saga as sagaPrompt } from './saga.prompt';
import { saga as sagaTranscript } from './saga.transcript';

import { sagas as allSagasRoot } from '@gdi/app-root';
import { sagas as allSagasBoards } from '@gdi/app-boards';
import { sagas as allSagasAuth } from '@gdi/auth';
import { sagas as allSagasWidgets } from '@gdi/widgets-starter';

export const allSagas = {
  'gdi.api': sagaApi,
  'gdi.assets': sagaAssets,
  'gdi.bar': sagaBar,
  'gdi.board': sagaBoard,
  'gdi.gdi': sagaGdi,
  'gdi.errors': sagaErrors,
  'gdi.keys': sagaKeys,
  'gdi.logs': sagaLogs,
  'gdi.navigation': sagaNavigation,
  'gdi.predicates': sagaPredicates,
  'gdi.prompt': sagaPrompt,
  'gdi.root': sagaRoot,
  'gdi.tags': sagaTags,
  'gdi.transcript': sagaTranscript,
  'gdi.onboarding': sagaOnboarding,

  ...allSagasRoot,
  ...allSagasBoards,
  ...allSagasAuth,
  ...allSagasWidgets,
};
