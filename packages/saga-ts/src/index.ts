export { runSaga, eventChannel } from 'redux-saga';
import * as effects from 'redux-saga/effects';
import * as typedEffects from 'typed-redux-saga';

export const takeEvery = effects.takeEvery;
export const takeLatest = effects.takeLatest;
export const put = typedEffects.put;
export const delay = effects.delay;
export const race = effects.race;
export const fork = typedEffects.fork;
export const select = typedEffects.select;
export const take = typedEffects.take;
export const call = typedEffects.call;
export const cancel = typedEffects.cancel;
export const getContext = typedEffects.getContext;
export const cancelled = typedEffects.cancelled;
export const all = effects.all;

export function* api(action: any) {
  try {
    const promise = yield* put(action);
    // @ts-ignore
    const response = yield promise;
    return { success: true, ...response };
  } catch (err) {
    return { success: false };
  }
}
