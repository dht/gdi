import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { SaveBoard } from './SaveBoard';

export type SaveBoardContainerProps = {};

export function SaveBoardContainer(_props: SaveBoardContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { boardId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onSave: () => {
        dispatch({
          type: 'BOARD',
          verb: 'saveBoard',
          payload: {
            id: boardId,
          },
        });
      },
    }),
    [boardId]
  );

  return <SaveBoard onSave={callbacks.onSave} />;
}

export default SaveBoardContainer;
