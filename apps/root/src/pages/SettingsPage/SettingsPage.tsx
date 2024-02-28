import type { ISettings } from '@gdi/store-base';
import { Form, Container } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import { Wrapper } from './SettingsPage.style';

export type SettingsPageProps = {
  settings: ISettings;
  allOptions: Json;
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function SettingsPage(props: SettingsPageProps) {
  const { settings, allOptions, callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <Wrapper>
      <Container header='Settings'>
        <Form
          config={forms.settings as any}
          allOptions={allOptions}
          data={{ ...formDefaults.settings, ...settings }}
          onSubmit={onSave}
        />
      </Container>
    </Wrapper>
  );
}

export default SettingsPage;
