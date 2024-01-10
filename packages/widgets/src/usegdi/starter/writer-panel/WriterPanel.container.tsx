import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { WriterPanel } from './WriterPanel';
import { IDocumentSuggestion } from '@gdi/store-base';

export type WriterPanelContainerProps = {};

export function WriterPanelContainer(_props: WriterPanelContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const suggestions = useSelector(selectors.raw.$rawDocumentSuggestions);
  const { isFetchingSuggestions } = appState;

  const callbacks = useMemo(
    () => ({
      onClick: (suggestion: IDocumentSuggestion) => {
        const { prompt } = suggestion;
        dispatch(actions.documentSuggestions.setAll({}));
        dispatch({ type: 'PROMPT', prompt });
      },
      onClear: () => {
        dispatch(actions.document.patch({ content: '' }));
        dispatch(actions.appState.patch({ flavour: 'default' }));
      },
    }),
    []
  );

  return (
    <WriterPanel
      suggestions={suggestions}
      isFetchingSuggestions={isFetchingSuggestions}
      callbacks={callbacks}
    />
  );
}

export default WriterPanelContainer;
