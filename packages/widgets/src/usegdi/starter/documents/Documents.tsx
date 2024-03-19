import React from 'react';
import { Wrapper } from './Documents.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import DocumentsSummary, {
  DocumentsSummaryContainer,
} from './_parts/DocumentsSummary/DocumentsSummary.container';
import DocumentFocusContainer from './_parts/DocumentFocus/DocumentFocus.container';

export type DocumentsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Documents(props: DocumentsProps) {
  const { data, callbacks } = props;

  function renderSummery() {
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
        renderSummery={renderSummery}
        renderFocus={renderFocus}
      />
    </Wrapper>
  );
}

export default Documents;
