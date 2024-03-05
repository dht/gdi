import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { AccountPage } from './AccountPage';
import { invokeEvent } from 'shared-base';

export type AccountPageContainerProps = {};

export function AccountPageContainer(_props: AccountPageContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('saveKeys', data);
      },
    }),
    []
  );

  return <AccountPage callbacks={callbacks} />;
}

export default AccountPageContainer;
