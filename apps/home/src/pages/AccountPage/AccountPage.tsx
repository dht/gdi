import { Form } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import BasePage from '../BasePage';
import AccountNote from './AccountPage.note';

export type AccountPageProps = {
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function AccountPage(props: AccountPageProps) {
  const { callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <BasePage header='Account'>
      <AccountNote />
      <Form
        config={forms.keys as any}
        data={formDefaults.keys}
        onSubmit={onSave}
      />
    </BasePage>
  );
}

export default AccountPage;
