import {
  actions,
  selectors,
  useAuth,
  useDispatch,
  useSelector,
} from '@gdi/store-base';
import { useParams } from 'react-router-dom';
import { useUnmount } from 'react-use';
import { invokeEvent } from 'shared-base';
import { Board } from './Board';
import { BoardLoading } from './Board.components';
import { isEmpty } from './Board.utils';

export type BoardContainerProps = {};

export const BoardContainer = (props: BoardContainerProps) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(selectors.raw.$rawBoard);
  const flavour = useSelector(selectors.raw.$rawAppState).flavour;

  useAuth(
    () => {
      dispatch({
        type: 'BOARD',
        verb: 'loadBoard',
        id: boardId,
      });
    },
    { allowGuests: true },
    [boardId]
  );

  useUnmount(() => {
    dispatch(actions.board.setAll({}));
    dispatch(actions.currentIds.patch({ boardId: '' }));
    invokeEvent('board/exit');
  });

  if (isEmpty(board)) {
    return <BoardLoading />;
  }

  return <Board board={board} flavour={flavour} />;
};
