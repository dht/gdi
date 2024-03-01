import { selectors, useSelector } from '@gdi/store-base';
import { Credits } from '@gdi/ui';

export type CreditsContainerProps = {};

export function CreditsContainer(props: CreditsContainerProps) {
  const appState = useSelector(selectors.raw.$rawAppState);
  const { credits } = appState;

  if (!credits) {
    return null;
  }

  return <Credits credits={credits} />;
}

export default CreditsContainer;
