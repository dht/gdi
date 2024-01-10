import { IBarItem, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Bar, isMobile } from '@gdi/ui';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addListener } from 'shared-base';
import { get } from 'lodash';

export type BarContainerProps = {};

export function BarContainer(_props: BarContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const board = useSelector(selectors.raw.$rawBoard);
  const barItems = useSelector(selectors.bar.$barItems);
  const location = useLocation();

  const { prompt, promptPlaceholder, is24Hours } = appState;

  useEffect(() => {
    const unlisten = addListener('global/speech', (event: any) => {
      const { transcript } = event;
      dispatch({ type: 'PROMPT', prompt: transcript });
    });

    return () => {
      unlisten();
    };
  });

  const onPrompt = (value: string) => {
    dispatch({ type: 'PROMPT', prompt: value });
  };

  const onItemClick = (barItem: IBarItem) => {
    const { id } = barItem;
    dispatch({ type: 'BAR', verb: id });
  };

  if (location.pathname === '/monitor') {
    return null;
  }

  return (
    <Bar
      prompt={prompt ?? ''}
      promptPlaceholder={promptPlaceholder ?? ''}
      onPrompt={onPrompt}
      items={barItems}
      onItemClick={onItemClick}
      is24Hours={is24Hours}
      board={board}
    />
  );
}

export default Bar;
