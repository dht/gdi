import { Markdown } from '@gdi/ui';
import { termsOfUse } from './TermsOfUsePage.data';
import { Wrapper } from './TermsOfUsePage.style';
import GenericTabsContainer from '../../containers/GenericTab.container';

export type TermsOfUsePageProps = {};

export function TermsOfUsePage(_props: TermsOfUsePageProps) {
  return (
    <>
      <GenericTabsContainer />
      <Wrapper>
        <Markdown markdown={termsOfUse} mode='dark' />
      </Wrapper>
    </>
  );
}

export default TermsOfUsePage;
