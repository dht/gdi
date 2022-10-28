import { actions } from '../store';
import { delay, takeEvery } from 'saga-ts';

type PieAction = {
    type: string;
    item: IPerson;
    itemId: string;
};

function* pieNewCampaign(action: PieAction) {
    console.log('pieNewCampaign action ->', action);
}

function* pieNewCampaignAction(action: PieAction) {
    console.log('pieNewCampaignAction action ->', action);
}

export function* root() {
    yield delay(300);
    yield takeEvery('ITEM_ACTION_PERSON_NEWSALE', pieNewCampaign);
    yield takeEvery('ITEM_ACTION_PERSON_NEWSALEACTION', pieNewCampaignAction);
}
