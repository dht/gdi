import { useRef } from 'react';
import { invokeEvent } from 'shared-base';
import {
  CtaEmail,
  Google,
  GoogleLogo,
  GoogleTitle,
  H1,
  Input,
  Or,
  Paragraph,
  Terms,
  Wrapper,
} from './Login.style';

export type LoginProps = {};

export function Login(_props: LoginProps) {
  const ref = useRef<HTMLInputElement>(null);

  function onGoogleClick() {
    invokeEvent('login/google');
  }

  function onEmailClick() {
    const email = ref.current?.value;

    if (!email) {
      return;
    }

    invokeEvent('login/email', { email });
  }

  return (
    <Wrapper className='Login-wrapper' data-testid='Login-wrapper'>
      <H1>Welcome to GDI</H1>
      <Paragraph>
        AI-powered workspace for super users.
        <br />
        Work at the speed of AI.
      </Paragraph>
      <Google onClick={onGoogleClick}>
        <GoogleLogo src='/google.svg' />
        <GoogleTitle>Continue with Google</GoogleTitle>
      </Google>
      <Or />
      <Input disabled={true} ref={ref} placeholder='Sign in with email' />
      <CtaEmail onClick={onEmailClick}>Send me a link</CtaEmail>
      <Terms>
        By continuing, you agree to accept
        <br /> our Privacy Policy &amp; Terms of Service.
      </Terms>
    </Wrapper>
  );
}

export default Login;
