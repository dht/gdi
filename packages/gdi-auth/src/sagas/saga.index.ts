import { saga as sagaAnalytics } from './saga.analytics';
import { saga as sagaAuth } from './saga.auth';
import { saga as sagaEmail } from './saga.email';
import { saga as sagaGoogle } from './saga.google';
import { saga as sagaLogout } from './saga.logout';
import { saga as sagaUser } from './saga.user';

export const sagas = {
  'auth.analytics': sagaAnalytics,
  'auth.auth': sagaAuth,
  'auth.email': sagaEmail,
  'auth.google': sagaGoogle,
  'auth.logout': sagaLogout,
  'auth.user': sagaUser,
};
