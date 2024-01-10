import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import AccountPage from './AccountPage';
import { invokeEvent } from 'shared-base';

export type AccountPageContainerProps = {};

export function AccountPageContainer(_props: AccountPageContainerProps) {
  const dispatch = useDispatch();

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
