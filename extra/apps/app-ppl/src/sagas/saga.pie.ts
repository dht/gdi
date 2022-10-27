import { actions } from '../store';
import { delay, takeEvery } from 'saga-ts';

type PieAction = {
    type: string;
    item: IPerson;
    itemId: string;
};

function* pieMail(action: PieAction) {
    console.log('pieMail action ->', action);
}

function* piePhone(action: PieAction) {
    console.log('piePhone action ->', action);
}

function* pieWhatsapp(action: PieAction) {
    console.log('pieWhatsapp action ->', action);
}

function* pieEditNote(action: PieAction) {
    console.log('pieEditNote action ->', action);
}

export function* root() {
    yield delay(300);
    yield takeEvery('ITEM_ACTION_PERSON_MAIL', pieMail);
    yield takeEvery('ITEM_ACTION_PERSON_PHONE', piePhone);
    yield takeEvery('ITEM_ACTION_PERSON_WHATSAPP', pieWhatsapp);
    yield takeEvery('ITEM_ACTION_PERSON_EDITNOTE', pieEditNote);
}
