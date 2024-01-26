import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { SettingsPage } from './SettingsPage';

export type SettingsPageContainerProps = {};

export function SettingsPageContainer(_props: SettingsPageContainerProps) {
  const dispatch = useDispatch();
  const settings = useSelector(selectors.raw.$rawSettings);

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('saveSettings', data);
        dispatch({ type: 'NAVIGATE', to: '/home' });
      },
    }),
    []
  );

  return <SettingsPage settings={settings} callbacks={callbacks} />;
}

export default SettingsPageContainer;
