import { Docs } from '@gdi/ui';
import data from './DocsPage.data.json';
import { Wrapper } from './DocsPage.style';

export type DocsPageProps = {
  rootUrl: string;
};

export function DocsPage(props: DocsPageProps) {
  const { rootUrl } = props;

  return (
    <Wrapper>
      <Docs
        data={data}
        baseUrl={rootUrl}
        initialPath='installation/installation.md'
      />
    </Wrapper>
  );
}

export default DocsPage;
