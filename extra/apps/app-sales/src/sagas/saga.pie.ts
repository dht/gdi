import { actions } from '../store';
import { delay, takeEvery } from 'saga-ts';

type PieAction = {
    type: string;
    item: IPerson;
    itemId: string;
};

function* pieNewSale(action: PieAction) {
    console.log('pieNewSale action ->', action);
}

function* pieNewSaleAction(action: PieAction) {
    console.log('pieNewSaleAction action ->', action);
}

export function* root() {
    yield delay(300);
    yield takeEvery('ITEM_ACTION_PERSON_NEWSALE', pieNewSale);
    yield takeEvery('ITEM_ACTION_PERSON_NEWSALEACTION', pieNewSaleAction);
}
