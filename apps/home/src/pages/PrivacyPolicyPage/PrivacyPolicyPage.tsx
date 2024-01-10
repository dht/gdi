import { Markdown } from '@gdi/ui';
import BasePage from '../BasePage';
import { policy } from './PrivacyPolicy';
import { Wrapper } from './PrivacyPolicyPage.style';

export type PrivacyPolicyPageProps = {};

export function PrivacyPolicyPage(_props: PrivacyPolicyPageProps) {
  return (
    <BasePage narrowWidth>
      <Wrapper>
        <Markdown markdown={policy} />
      </Wrapper>
    </BasePage>
  );
}

export default PrivacyPolicyPage;
