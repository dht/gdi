import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import AccountPage from './AccountPage';
import { useMount } from 'react-use';

export type AccountPageContainerProps = {};

export function AccountPageContainer(_props: AccountPageContainerProps) {
  const dispatch = useDispatch();
  const tab = useLocation().hash.replace('#', '') || 'api_keys';

  useMount(() => {
    document.location.hash = 'api_keys';
  });

  const callbacks = useMemo(
    () => ({
      onChangeTab: (tabId: string) => {
        document.location.hash = tabId;
      },
    }),
    []
  );

  return <AccountPage tab={tab} callbacks={callbacks} />;
}

export default AccountPageContainer;
