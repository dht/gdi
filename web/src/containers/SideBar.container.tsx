import { selectors, useSelector } from '@gdi/store-base';
import { SideBar } from '@gdi/ui';

export type SideBarContainerProps = {};

export function SideBarContainer(_props: SideBarContainerProps) {
  const appState = useSelector(selectors.raw.$rawAppState);
  const { isFullScreen } = appState;

  return <SideBar minimal={isFullScreen} />;
}

export default SideBarContainer;
