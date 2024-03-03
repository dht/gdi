import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { SettingsPage } from './SettingsPage';
import { useLocation } from 'react-router-dom';
import { useMount } from 'react-use';

export type SettingsPageContainerProps = {};

export function SettingsPageContainer(_props: SettingsPageContainerProps) {
  const dispatch = useDispatch();
  const settings = useSelector(selectors.raw.$rawSettings);
  const allOptions = useSelector(selectors.options.$allOptions);

  const location = useLocation();
  const { hash } = location;
  const tab = hash.replace('#', '');

  useMount(() => {});

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('saveSettings', data);
        dispatch({ type: 'NAVIGATE', to: '/home' });
      },
    }),
    []
  );

  return (
    <SettingsPage
      tab={tab}
      settings={settings}
      allOptions={allOptions}
      callbacks={callbacks}
    />
  );
}

export default SettingsPageContainer;
