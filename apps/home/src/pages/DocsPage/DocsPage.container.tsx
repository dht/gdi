import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import DocsPage from './DocsPage';

export type DocsPageContainerProps = {};

export function DocsPageContainer(_props: DocsPageContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { docsRootUrl } = appState;

  return <DocsPage rootUrl={docsRootUrl} />;
}

export default DocsPageContainer;
