import { Markdown } from '@gdi/ui';
import { policy } from './PrivacyPolicy';
import { Wrapper } from './PrivacyPolicyPage.style';
import { TabsBig } from '@gdi/ui';
import GenericTabsContainer from '../../containers/GenericTab.container';

export type PrivacyPolicyPageProps = {};

export function PrivacyPolicyPage(_props: PrivacyPolicyPageProps) {
  return (
    <>
      <GenericTabsContainer />
      <Wrapper>
        <Markdown markdown={policy} mode='dark' />
      </Wrapper>
    </>
  );
}

export default PrivacyPolicyPage;
