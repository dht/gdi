import { createContext, useEffect, useMemo } from 'react';
import { useSetState } from 'react-use';
import { ILoginContext, ILoginProviderProps, ILoginState, defaultLoginState } from '../types';
import { addListener } from 'shared-base';
import { User } from 'firebase/auth';
import { initialsFromNameAndEmail } from '../utils/displayName';

export const LoginContext = createContext<ILoginContext>({
  state: defaultLoginState,
  patchState: () => {},
  callbacks: {},
});

export const LoginProvider = (props: ILoginProviderProps) => {
  const [state, patchState] = useSetState<ILoginState>({
    ...defaultLoginState,
  });

  const callbacks = useMemo(() => ({}), [state]);

  const cValue = useMemo(
    () => ({
      state,
      patchState,
      callbacks,
    }),
    [state, callbacks]
  );

  useEffect(() => {
    addListener('auth/change', (data) => {
      const { user } = data;
      const {
        uid,
        displayName = '',
        email = '',
        emailVerified,
        isAnonymous,
        metadata,
        photoURL,
        providerId,
      } = user as User;

      const { createdAt, lastLoginAt } = metadata as Json;

      const status = isAnonymous ? 'anonymous' : 'authenticated';

      const initials = initialsFromNameAndEmail(displayName ?? '', email ?? '');

      patchState({
        uid,
        email,
        emailVerified,
        displayName,
        displayPhoto: photoURL,
        isAnonymous: isAnonymous,
        createdAt,
        lastLoginAt,
        provider: providerId as any,
        user,
        status,
        initials,
      });
    });
  });

  return <LoginContext.Provider value={cValue}>{props.children}</LoginContext.Provider>;
};
