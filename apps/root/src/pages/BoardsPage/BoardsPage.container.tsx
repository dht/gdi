import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { BoardsPage } from './BoardsPage';

export type BoardsPageContainerProps = {};

export function BoardsPageContainer(_props: BoardsPageContainerProps) {
  const dispatch = useDispatch();
  const boards = useSelector(selectors.base.$boards);

  const callbacks = useMemo(
    () => ({
      onClick: (board: Json) => {
        dispatch({
          type: 'HOME',
          verb: 'navigateToDetails',
          id: board.id,
          params: {
            isBrowse: true,
          },
        });
      },
    }),
    []
  );

  return <BoardsPage boards={boards} callbacks={callbacks} />;
}

export default BoardsPageContainer;
