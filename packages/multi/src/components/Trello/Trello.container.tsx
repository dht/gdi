import { useMemo } from 'react';
import { Json } from '../../types';
import Trello from './Trello';
import { TrelloProvider } from './Trello.context';
import { ITrelloCallbacks, ITrelloConfig } from './Trello.types';

export type TrelloContainerProps = {
  config?: ITrelloConfig;
  callbacks: ITrelloCallbacks;
};

export function TrelloContainer(props: TrelloContainerProps) {
  const { config } = props;

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, _params?: Json) => {},
      onSort: () => {},
    }),
    []
  );

  return (
    <TrelloProvider callbacks={callbacks} state={initialState}>
      <Trello />
    </TrelloProvider>
  );
}

export default TrelloContainer;
