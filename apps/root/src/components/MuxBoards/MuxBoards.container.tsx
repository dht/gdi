import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxBoards } from './MuxBoards';

export type MuxBoardsContainerProps = {};

export function MuxBoardsContainer(_props: MuxBoardsContainerProps) {
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

  return <MuxBoards boards={boards} callbacks={callbacks} />;
}

export default MuxBoardsContainer;
