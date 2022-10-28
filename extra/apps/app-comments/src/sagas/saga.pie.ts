import { actions } from '../store';
import { delay, takeEvery } from 'saga-ts';

type PieAction = {
    type: string;
    item: IPerson;
    itemId: string;
};

function* pieNewComment(action: PieAction) {
    console.log('pieNewComment action ->', action);
}

function* pieNewCommentAction(action: PieAction) {
    console.log('pieNewCommentAction action ->', action);
}

export function* root() {
    yield delay(300);
    yield takeEvery('ITEM_ACTION_PERSON_NEWSALE', pieNewComment);
    yield takeEvery('ITEM_ACTION_PERSON_NEWSALEACTION', pieNewCommentAction);
}
