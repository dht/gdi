import { selectors, useSelector } from '@gdi/store-base';
import { Footer } from '@gdi/ui';

export type FooterContainerProps = {};

export function FooterContainer(_props: FooterContainerProps) {
  const appState = useSelector(selectors.raw.$rawAppState);
  const { version } = appState;

  return <Footer version={version} />;
}

export default FooterContainer;
