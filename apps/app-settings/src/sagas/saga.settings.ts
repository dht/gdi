import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';

type SettingsChangeAction = {
    type: 'SETTINGS_CHANGE';
    data: Json;
};

function* settingsChange(action: SettingsChangeAction) {}

export function* root() {
    yield takeEvery('SETTINGS_CHANGE', settingsChange);
}
