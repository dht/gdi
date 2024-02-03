import { IDocumentSuggestions, IDocumentSuggestion } from '@gdi/store-base';
import { useMeasure } from 'react-use';
import {
  Actions,
  Column,
  Cta,
  Description,
  Header,
  Suggestion,
  Suggestions,
  Title,
  Top,
  Wrapper,
} from './WriterPanel.style';
import { Loader } from '@gdi/ui';

export type WriterPanelProps = {
  isFetchingSuggestions: boolean;
  suggestions: IDocumentSuggestions;
  callbacks: {
    onClick: (suggestion: IDocumentSuggestion) => void;
    onClear: () => void;
  };
};

export function WriterPanel(props: WriterPanelProps) {
  const { isFetchingSuggestions, suggestions, callbacks } = props;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  function renderSuggestion(suggestion: IDocumentSuggestion) {
    const { title, prompt } = suggestion;

    return (
      <Suggestion
        key={suggestion.id}
        className='suggestion'
        onClick={() => callbacks.onClick(suggestion)}
      >
        <Column>
          <Title>{title}</Title>
          <Description $width={width - 150}>{prompt}</Description>
        </Column>
      </Suggestion>
    );
  }

  function renderSuggestions() {
    if (isFetchingSuggestions) {
      return <Loader size={50} marginTop={160} />;
    }

    return Object.values(suggestions).map((suggestion: IDocumentSuggestion) =>
      renderSuggestion(suggestion)
    );
  }

  return (
    <Wrapper className='WriterPanel-wrapper' data-testid='WriterPanel-wrapper' ref={ref}>
      <Top>
        <Header>Writer's Panel</Header>
        <Actions>
          <Cta onClick={callbacks.onClear}>Start over</Cta>
        </Actions>
      </Top>
      <Suggestions $height={height - 60}>{renderSuggestions()}</Suggestions>
    </Wrapper>
  );
}

export default WriterPanel;
