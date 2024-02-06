import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Container } from '../base.style';
import { Actions, Center, Github, Left, Right, Slogan, Wrapper } from './TopBar.style';
import Logo from '../Logo/Logo';
import GitHubButton from 'react-github-btn';
import { isMobile } from '../../utils/mobile';

export type TopBarProps = {
  children?: React.ReactNode;
  className?: string;
  logoColor?: string;
  renderCenter?: () => React.ReactNode;
  renderActions?: () => React.ReactNode;
  renderUserMenu?: () => React.ReactNode;
};

export function TopBar(props: TopBarProps) {
  const { logoColor } = props;
  const navigate = useNavigate();

  function toHome() {
    navigate('/');
  }

  const className = classnames('container', props.className);

  function renderCenter() {
    if (!props.renderCenter) {
      return null;
    }

    return props.renderCenter();
  }

  function renderActions() {
    if (!props.renderActions) {
      return null;
    }

    return props.renderActions();
  }

  function renderUserMenu() {
    if (!props.renderUserMenu) {
      return;
    }

    return props.renderUserMenu();
  }

  function renderGithub() {
    if (isMobile()) {
      return;
    }

    return (
      <GitHubButton
        href='https://github.com/dht/gdi'
        data-color-scheme='no-preference: light; light: light; dark: light;'
        data-size='large'
        data-show-count='false'
        aria-label='Star dht/gdi on GitHub'
      >
        Star
      </GitHubButton>
    );
  }

  return (
    <Wrapper className='TopBar-wrapper' data-testid='TopBar-wrapper'>
      <Container $row className={className}>
        <Left>
          <Logo size={isMobile() ? 22 : 30} onClick={toHome} />
          <Slogan>Fusion Interfaces for the AI Era</Slogan>
          {renderGithub()}
        </Left>

        <Center>{renderCenter()}</Center>
        <Right>
          <Actions>{renderActions()}</Actions>
          {renderUserMenu()}
        </Right>
      </Container>
    </Wrapper>
  );
}

export default TopBar;
