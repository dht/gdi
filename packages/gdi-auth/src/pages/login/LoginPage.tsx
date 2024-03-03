import BkVideo from '../../components/BkVideo/BkVideo';
import Login from '../../components/Login/Login';
import { Content, Logo, Wrapper } from './LoginPage.style';

export type LoginPageProps = {
  onHome: () => void;
};

export function LoginPage(props: LoginPageProps) {
  return (
    <Wrapper className='LoginPage-wrapper' data-testid='LoginPage-wrapper'>
      <BkVideo index={5} />
      <Content>
        <Logo src='/logo.svg' onClick={props.onHome} />
        <Login />
      </Content>
    </Wrapper>
  );
}

export default LoginPage;
