import BkVideo from '../../components/BkVideo/BkVideo';
import Login from '../../components/Login/Login';
import { Logo, Wrapper } from './LoginPage.style';

export type LoginPageProps = {
  onHome: () => void;
};

export function LoginPage(props: LoginPageProps) {
  return (
    <Wrapper className='LoginPage-wrapper' data-testid='LoginPage-wrapper'>
      <BkVideo index={5} />
      <Logo src='/logo-white.svg' onClick={props.onHome} />
      <Login />
    </Wrapper>
  );
}

export default LoginPage;
