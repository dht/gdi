import { formDefaults, forms } from '../../_definitions/forms';
import AccountNote from '../../groups/AccountPage/AccountPage.note';
import { DeleteKeys, H1, Wrapper } from './ApiPage.style';
import { Form, Container } from '@gdi/ui';

export type ApiPageProps = {
  callbacks: {
    onSave: (data: Json) => void;
  };
};

export function ApiPage(props: ApiPageProps) {
  const { callbacks } = props;

  function onSave(values: Json, _all: Json) {
    callbacks.onSave(values);
    return Promise.resolve(true);
  }

  return (
    <Wrapper className='ApiPage-wrapper' data-testid='ApiPage-wrapper'>
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

export default ApiPage;
