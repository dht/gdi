import { TopBar } from '@gdi/ui';
import UserMenuContainer from './UserMenu.container';

export type GenericTabsContainerProps = {};

export function GenericTabsContainer(_props: GenericTabsContainerProps) {
  return (
    <TopBar tabId={''} tabs={[]} onChange={() => {}}>
      <UserMenuContainer />
    </TopBar>
  );
}

export default GenericTabsContainer;
