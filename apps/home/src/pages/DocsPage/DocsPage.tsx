import { Docs } from '@gdi/ui';
import BasePage from '../BasePage';
import data from './DocsPage.data.json';

export type DocsPageProps = {
  rootUrl: string;
};

export function DocsPage(props: DocsPageProps) {
  const { rootUrl } = props;

  return (
    <BasePage>
      <Docs
        data={data}
        baseUrl={rootUrl}
        initialPath='installation/installation.md'
      />
    </BasePage>
  );
}

export default DocsPage;
