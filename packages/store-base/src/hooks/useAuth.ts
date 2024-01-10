import { useEffect } from 'react';
import { useSelector } from '../provider';
import { selectors } from '../selectors/selectors.index';
import { IUser } from '../types';

type Callback = (user: IUser) => void;

type Options = {
  allowGuests?: boolean;
};

export function useAuth(callback: Callback, options: Options = {}, depArray: any[] = []) {
  const { allowGuests = false } = options;
  const user = useSelector(selectors.raw.$rawUser);
  const appState = useSelector(selectors.raw.$rawAppState);
  const { isAuthenticated } = appState;

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const { isAnonymous } = user;

    if (isAnonymous && !allowGuests) {
      return;
    }

    callback(user);
  }, [isAuthenticated, user, allowGuests, ...depArray]);
}
