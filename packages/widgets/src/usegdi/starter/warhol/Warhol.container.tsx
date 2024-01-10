import { selectors, useSelector } from '@gdi/store-base';
import Warhol from './Warhol';
import { data } from './Warhol.data';

export type WarholContainerProps = {};

export function WarholContainer(_props: WarholContainerProps) {
  const appState = useSelector(selectors.raw.$rawAppState);
  const { boardsRootUrl } = appState;

  return <Warhol root={boardsRootUrl} frames={data} />;
}

export default WarholContainer;
