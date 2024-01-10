import { Markdown } from '@gdi/ui';
import BasePage from '../BasePage';
import { termsOfUse } from './TermsOfUsePage.data';
import { Wrapper } from './TermsOfUsePage.style';

export type TermsOfUsePageProps = {};

export function TermsOfUsePage(_props: TermsOfUsePageProps) {
  return (
    <BasePage narrowWidth>
      <Wrapper>
        <Markdown markdown={termsOfUse} />
      </Wrapper>
    </BasePage>
  );
}

export default TermsOfUsePage;
