import { selectors } from '@gdi/store-base';
import { useSelector } from '@gdi/store-base';
import Github from './Github';

export type GithubContainerProps = {};

export function GithubContainer(_props: GithubContainerProps) {
  const url = useSelector(selectors.base.$sourceUrl);

  return <Github url={url} />;
}

export default GithubContainer;
