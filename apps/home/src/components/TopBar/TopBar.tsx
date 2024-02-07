import { ApiKeys, IUser, TopBar as TopBarBase } from '@gdi/ui';
import Search from '../Search/Search';
import UserMenuContainer from '../UserMenu/UserMenu.container';
import { Actions, Cta } from './TopBar.style';

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
};

export function TopBar(props: TopBarProps) {
  const { isGuest, user, search, hideSearch, showSubmit, isApiKeyOk } = props;

  function renderCenter() {
    if (hideSearch) {
      return null;
    }

    return <Search value={search} onChange={props.onSearch} />;
  }

  function renderMainAction() {
    return showSubmit ? (
      <Cta onClick={() => props.onNavigate('/newBoard')}>Submit your Board</Cta>
    ) : (
      <Cta onClick={() => props.onNavigate('/boards/B-009')}>My Assets</Cta>
    );
  }

  function renderApiKeys() {
    if (isGuest) {
      return null;
    }

    return (
      <ApiKeys
        isApiKeyOk={isApiKeyOk}
        onClick={() => props.onNavigate('/account')}
      />
    );
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
    return <UserMenuContainer />;
  }

  return (
    <TopBarBase
      renderCenter={renderCenter}
      renderActions={renderActions}
      renderUserMenu={renderUserMenu}
    />
  );
}

export default TopBar;
