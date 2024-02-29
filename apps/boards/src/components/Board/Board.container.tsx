import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useParams } from 'react-router-dom';
import { useUnmount } from 'react-use';
import { invokeEvent } from 'shared-base';
import { Board } from './Board';
import { BoardLoading } from './Board.components';
import { isEmpty } from './Board.utils';
import { useEffect, useMemo } from 'react';

export type BoardContainerProps = {
  id?: string;
  darkMode?: boolean;
};

export const BoardContainer = (props: BoardContainerProps) => {
  const { id: boardId, darkMode } = props;
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const board = useSelector(selectors.raw.$rawBoard);
  const appState = useSelector(selectors.raw.$rawAppState);
  const { flavour, flavourColumnIndex } = appState;

  useEffect(() => {
    dispatch(actions.currentIds.patch({ boardId, itemId }));
  }, [boardId]);

  useEffect(() => {
    dispatch(actions.currentIds.patch({ itemId }));
  }, [itemId]);

  useUnmount(() => {
    dispatch(actions.board.setAll({}));
    dispatch(actions.currentIds.patch({ boardId: '', itemId: '' }));
    invokeEvent('board/exit');
  });

  const callbacks = useMemo(
    () => ({
      onColumnChange: (columnIndex: number) => {
        dispatch(actions.appState.patch({ flavourColumnIndex: columnIndex }));
      },
    }),
    []
  );

  if (isEmpty(board)) {
    return <BoardLoading />;
  }

  return (
    <Board
      darkMode={darkMode}
      board={board}
      flavour={flavour}
      columnIndex={flavourColumnIndex}
      callbacks={callbacks}
    />
  );
};
