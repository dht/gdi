import { useMemo } from 'react';
import BoardDetailsPage from './BoardDetailsPage';
import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Loader } from '@gdi/ui';
import { useParams } from 'react-router-dom';
import { ActionHome } from '../../sagas/saga.home';

export type BoardDetailsPageContainerProps = {};

export function BoardDetailsPageContainer(
  _props: BoardDetailsPageContainerProps
) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const boards = useSelector(selectors.base.$boards);

  const board = useMemo(() => {
    return boards.find((board: any) => board.id === id) as Json;
  }, [id, boards]);

  const onAction = (action: ActionHome) => {
    dispatch(action);
  };

  if (!board) {
    return <Loader />;
  }

  return <BoardDetailsPage board={board} onAction={onAction} />;
}

export default BoardDetailsPageContainer;
