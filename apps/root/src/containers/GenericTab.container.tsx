import { TopBar } from '@gdi/ui';
import UserMenuContainer from './UserMenu.container';
import CreditsContainer from './Credits.container';

export type GenericTabsContainerProps = {};

export function GenericTabsContainer(_props: GenericTabsContainerProps) {
  return (
    <TopBar tabId={''} tabs={[]} onChange={() => {}}>
      <CreditsContainer />
      <UserMenuContainer />
    </TopBar>
  );
}

export default GenericTabsContainer;
