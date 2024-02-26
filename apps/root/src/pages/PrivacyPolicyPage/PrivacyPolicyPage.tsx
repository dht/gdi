import { Markdown } from '@gdi/ui';
import { policy } from './PrivacyPolicy';
import { Wrapper } from './PrivacyPolicyPage.style';

export type PrivacyPolicyPageProps = {};

export function PrivacyPolicyPage(_props: PrivacyPolicyPageProps) {
  return (
    <Wrapper>
      <Wrapper>
        <Markdown markdown={policy} />
      </Wrapper>
    </Wrapper>
  );
}

export default PrivacyPolicyPage;
