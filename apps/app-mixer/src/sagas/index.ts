import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as apiPublic } from './saga.api.public';
import { root as apiPrivate } from './saga.api.private';
import { root as elements } from './saga.elements';
import { root as contentImages } from './saga.content.images';
import { root as demo } from './saga.demo';
import { root as gallery } from './saga.gallery';
import { root as importExport } from './saga.importExport';
import { root as pages } from './saga.pages';
import { root as mixer } from './saga.mixer';
import { PlatformLifeCycleEvents } from '@gdi/types';

function* root() {
    yield* fork(apiPublic);
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(apiPrivate);
    yield* fork(elements);
    yield* fork(gallery);
    yield* fork(demo);
    yield* fork(importExport);
    yield* fork(contentImages);
    yield* fork(mixer);
    yield* fork(pages);
    yield* fork(ping);
}

export const appSagas = [root];
