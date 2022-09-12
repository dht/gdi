import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as apiPrivate } from './saga.api.private';
import { root as contentImages } from './saga.content.images';
import { root as importExport } from './saga.importExport';
import { root as factory } from './saga.factory';
import { PlatformLifeCycleEvents } from '@gdi/types';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(apiPrivate);
    yield* fork(importExport);
    yield* fork(contentImages);
    yield* fork(factory);
    yield* fork(ping);
}

export const appSagas = [root];
