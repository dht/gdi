import { User } from 'firebase/auth';
import { runFunction } from './firebase.functions';

export const setUser = async (user: any) => {
  const { isAnonymous } = user as User;

  if (isAnonymous) {
    return;
  }

  runFunction('/api/account/login');
};
