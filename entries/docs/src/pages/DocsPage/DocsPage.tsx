import React from 'react';
import { Wrapper } from './DocsPage.style';
import { Docs } from '@gdi/ui';
import data from './DocsPage.data.json';

export type DocsPageProps = {
  rootUrl: string;
};

export function DocsPage(props: DocsPageProps) {
  const { rootUrl } = props;

  return (
    <Wrapper className='DocsPage-wrapper' data-testid='DocsPage-wrapper'>
      <Docs data={data} baseUrl={rootUrl} initialPath='installation/installation.md' />
    </Wrapper>
  );
}

export default DocsPage;
