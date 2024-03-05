import { Container, Form } from '@gdi/ui';
import { formDefaults, forms } from '../../_definitions/forms';
import AccountNote from './AccountPage.components';
import { DeleteKeys, H1, Wrapper } from './AccountPage.style';

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
    <Wrapper className='AccountPage-wrapper' data-testid='AccountPage-wrapper'>
      <Container>
        <H1>Account</H1>
        <AccountNote>
          <DeleteKeys className='link'>Delete all my keys</DeleteKeys>
        </AccountNote>
        <Form
          config={forms.keys as any}
          data={formDefaults.keys}
          onSubmit={onSave}
        />
      </Container>
    </Wrapper>
  );
}

export default AccountPage;
