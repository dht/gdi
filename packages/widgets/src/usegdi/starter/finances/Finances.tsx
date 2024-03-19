import { Multi } from 'multi';
import DocumentFocusContainer from '../documents/_parts/DocumentFocus/DocumentFocus.container';
import { Wrapper } from './Finances.style';
import { initialView, multi, views } from './_multi';
import { FinancesSummaryContainer } from './_parts/FinancesSummary/FinancesSummary.container';

export type FinancesProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Finances(props: FinancesProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <FinancesSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <DocumentFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Finances-wrapper' data-testid='Finances-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
        renderSummary={renderSummary}
        renderFocus={renderFocus}
      />
    </Wrapper>
  );
}

export default Finances;
