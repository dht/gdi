import DocsPage from './DocsPage';

export type DocsPageContainerProps = {};

export function DocsPageContainer(_props: DocsPageContainerProps) {
  return <DocsPage rootUrl='https://raw.githubusercontent.com/dht/gdi/main/docs' />;
}

export default DocsPageContainer;
