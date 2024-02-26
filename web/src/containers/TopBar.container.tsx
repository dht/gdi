import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { TopBar } from '@gdi/ui';
import { useLocation } from 'react-router-dom';
import UserMenuContainer from './UserMenu.container';

export type TopBarContainerProps = {};

export function TopBarContainer(props: TopBarContainerProps) {
  const dispatch = useDispatch();
  const search = useSelector(selectors.raw.$rawAppState).q;
  const user = useSelector(selectors.raw.$rawUser);
  const isGuest = useSelector(selectors.base.$isGuest);
  const isApiKeyOk = useSelector(selectors.base.$isApiKeyOk);
  const location = useLocation();

  const showSubmit = location.pathname === '/browse';

  const onSearch = (value: string) => {
    dispatch(actions.appState.patch({ q: value }));
  };

  const onNavigate = (to: string) => {
    dispatch({
      type: 'NAVIGATE',
      to,
    });
  };

  return (
    <TopBar
      search={search}
      onSearch={onSearch}
      onNavigate={onNavigate}
      showSubmit={showSubmit}
      user={user}
      isGuest={isGuest}
      isApiKeyOk={isApiKeyOk}
    >
      <UserMenuContainer />
    </TopBar>
  );
}

export default TopBarContainer;
