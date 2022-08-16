import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as apiPrivate } from './saga.api.private';
import { root as flexSplit } from './saga.flex.split';
import { root as flexKeyboard } from './saga.flex.keyboard';
import { root as flexSeed } from './saga.flex.seed';
import { root as flexProps } from './saga.flex.props';
import { root as flexExport } from './saga.flex.export';
import { PlatformLifeCycleEvents } from '@gdi/types';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(apiPrivate);
    yield* fork(flexExport);
    yield* fork(flexSplit);
    yield* fork(flexProps);
    yield* fork(flexKeyboard);
    yield* fork(flexSeed);
    yield* fork(ping);
}

export const appSagas = [root];
