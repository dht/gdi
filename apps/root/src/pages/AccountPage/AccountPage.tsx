import { Form } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import AccountNote from './AccountPage.note';
import { DeleteKeys } from './AccountPage.style';
import { Wrapper } from '../RootPage/RootPage.style';

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
    <Wrapper header='Account'>
      <AccountNote>
        <DeleteKeys className='link'>Delete all my keys</DeleteKeys>
      </AccountNote>
      <Form
        config={forms.keys as any}
        data={formDefaults.keys}
        onSubmit={onSave}
      />
    </Wrapper>
  );
}

export default AccountPage;
