import type { ISettings } from '@gdi/store-base';
import { Form, Container } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import { H1, Wrapper } from './SettingsPage.style';
import { Top } from '../../groups/MuxPage/MuxPage.style';
import { GenericTabsContainer } from '../../containers/GenericTab.container';

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
      <Container>
        <H1>Settings</H1>
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
