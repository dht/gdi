import classnames from 'classnames';
import GitHubButton from 'react-github-btn';
import { useNavigate } from 'react-router-dom';
import { isMobile } from '../../utils/mobile';
import ClientIcons from '../ClientIcons/ClientIcons';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import { Container } from '../base.style';
import { Actions, Center, Cta, Left, Right, Slogan, Wrapper } from './TopBar.style';
import ApiKeys from '../ApiKeys/ApiKeys';

export type TopBarProps = {
  search?: string;
  onSearch: (value: string) => void;
  onNavigate: (to: string) => void;
  isDetails?: boolean;
  hideSearch?: boolean;
  showSubmit?: boolean;
  user: IUser;
  isGuest: boolean;
  isApiKeyOk: boolean;
  className?: string;
};

export function TopBar(props: TopBarProps) {
  const { isGuest, user, search, hideSearch, showSubmit, isApiKeyOk } = props;

  const navigate = useNavigate();

  function toHome() {
    navigate('/');
  }

  const className = classnames('container', props.className);

  function renderCenter() {
    if (hideSearch) {
      return null;
    }

    return <Search value={search} onChange={props.onSearch} />;
  }

  function renderMainAction() {
    return showSubmit || isGuest ? (
      <Cta onClick={() => props.onNavigate('/newBoard')}>Submit your Board</Cta>
    ) : (
      <Cta onClick={() => props.onNavigate('/boards/B-009')}>My Assets</Cta>
    );
  }

  function renderApiKeys() {
    if (isGuest) {
      return null;
    }

    return <ApiKeys isApiKeyOk={isApiKeyOk} onClick={() => props.onNavigate('/account')} />;
  }

  function renderActions() {
    return (
      <Actions>
        {renderMainAction()}
        {renderApiKeys()}
      </Actions>
    );
  }

  function renderUserMenu() {
    // return <UserMenuContainer />;
    return null;
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
          <ClientIcons />
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
