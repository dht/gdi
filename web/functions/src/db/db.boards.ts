import { Json } from '@gdi/store-base';
import { deleteItem, getCollection, getItem, setItem } from '../utils/firebase';
import { cleanUndefined } from '../utils/object';
import { getScopedPath } from './db._base';

export const newPlayback = (req: any, variables: Json) => {
  const id = variables.id;
  const scopedPath = getScopedPath(req, `playbacks/${id}`, 'global');
  return setItem(scopedPath, cleanUndefined(variables));
};

export const getPlayback = async (req: any, id: string) => {
  const scopedPath = getScopedPath(req, `playbacks/${id}`, 'global');
  return getItem(scopedPath);
};

export const saveBoardForLayer = (req: any, boardId: string) => {
  const scopedPath = getScopedPath(req, `/savedBoards/${boardId}`, 'userData');
  return setItem(scopedPath, {
    id: boardId,
    tsAdded: Date.now(),
  });
};

export const removeSavedBoard = (req: any, boardId: string) => {
  const scopedPath = getScopedPath(req, `/savedBoards/${boardId}`, 'userData');
  return deleteItem(scopedPath);
};

export const addToMyBoards = async (req: any, boardId: string) => {
  const scopedPath = getScopedPath(req, `/myBoards/${boardId}`, 'userData');
  return setItem(scopedPath, {
    id: boardId,
    tsAdded: Date.now(),
    tsLastOpened: Date.now(),
  });
};

export const newBoard = async (req: any, board: Json) => {
  const { user } = req;
  const { uid } = user;

  const scopedPath = getScopedPath(req, `/${board.id}`, 'pendingBoards');

  return setItem(scopedPath, {
    id: board.id,
    ...board,
    uid,
    tsAdded: Date.now(),
  });
};

export const newReview = async (req: any, review: Json) => {
  const { user } = req;
  const { uid } = user;

  const scopedPath = getScopedPath(req, `/${review.id}`, 'pendingReviews');

  return setItem(scopedPath, {
    id: review.id,
    ...review,
    uid,
    tsAdded: Date.now(),
  });
};

export const getMyBoards = async (req: any) => {
  const scopedPath = getScopedPath(req, '/myBoards', 'userData');
  const items = await getCollection(scopedPath);
  return items.sort((a: any, b: any) => b.tsAdded - a.tsAdded);
};

export const removeFromMyBoards = async (req: any, boardId: string) => {
  const scopedPath = getScopedPath(req, `/myBoards/${boardId}`, 'userData');
  return deleteItem(scopedPath);
};

export const all = {
  playbacks: {
    create: newPlayback,
    get: getPlayback,
  },
  boards: {
    save: saveBoardForLayer,
    remove: removeSavedBoard,
    getMy: getMyBoards,
    addToMy: addToMyBoards,
    removeFromMy: removeFromMyBoards,
    suggest: newBoard,
    review: newReview,
  },
};
