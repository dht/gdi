import type { ISettings } from '@gdi/store-base';
import { Form } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import BasePage from '../BasePage';

export type SettingsPageProps = {
  settings: ISettings;
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function SettingsPage(props: SettingsPageProps) {
  const { settings, callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <BasePage header='Settings'>
      <Form
        config={forms.settings as any}
        data={{ ...formDefaults.settings, ...settings }}
        onSubmit={onSave}
      />
    </BasePage>
  );
}

export default SettingsPage;
