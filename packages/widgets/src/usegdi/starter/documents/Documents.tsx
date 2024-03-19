import { Multi } from 'multi';
import { Wrapper } from './Documents.style';
import { initialView, multi, views } from './_multi';
import DocumentFocusContainer from './_parts/DocumentFocus/DocumentFocus.container';
import { DocumentsSummaryContainer } from './_parts/DocumentsSummary/DocumentsSummary.container';

export type DocumentsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Documents(props: DocumentsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <DocumentsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <DocumentFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Documents-wrapper' data-testid='Documents-wrapper'>
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

export default Documents;
