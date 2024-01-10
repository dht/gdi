import {} from 'tabler-icons-react';
import Button from '../Button/Button';
import { Ol, P, Wrapper } from './CreateAccount.style';

export type CreateAccountProps = {};

export function CreateAccount(_props: CreateAccountProps) {
  function onClick() {
    window.location.href = '/login';
  }

  return (
    <Wrapper className='CreateAccount-wrapper' data-testid='CreateAccount-wrapper'>
      <P>
        You are currently in <strong>Guest Mode</strong> which allows you to play around with the
        boards. <span>Signing in</span> is required in order to:
      </P>
      <Ol>
        <li>Send prompts</li>
        <li>Save boards</li>
        <li>Manage assets</li>
        <li>Use database</li>
        <li>Submit a new board</li>
        <li>Submit a review</li>
      </Ol>
      <Button onClick={onClick}>Sign in with Google</Button>
    </Wrapper>
  );
}

export default CreateAccount;
