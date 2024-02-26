import { Markdown } from '@gdi/ui';
import { termsOfUse } from './TermsOfUsePage.data';
import { Wrapper } from './TermsOfUsePage.style';

export type TermsOfUsePageProps = {};

export function TermsOfUsePage(_props: TermsOfUsePageProps) {
  return (
    <Wrapper>
      <Markdown markdown={termsOfUse} />
    </Wrapper>
  );
}

export default TermsOfUsePage;
