import BkVideo from '../../components/BkVideo/BkVideo';
import Login from '../../components/Login/Login';
import { Content, Github, Logo, Wrapper } from './LoginPage.style';

export type LoginPageProps = {
  onHome: () => void;
};

export function LoginPage(props: LoginPageProps) {
  function onGithub() {
    window.open('https://github.com/dht/gdi', '_blank');
  }

  return (
    <Wrapper className='LoginPage-wrapper' data-testid='LoginPage-wrapper'>
      <BkVideo index={5} />
      <Content>
        <Logo src='/logo.svg' onClick={props.onHome} />
        <Github src='/github-mark.svg' alt='github' draggable={false} onClick={onGithub} />
        <Login />
      </Content>
    </Wrapper>
  );
}

export default LoginPage;
