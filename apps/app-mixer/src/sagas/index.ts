import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as apiPublic } from './saga.api.public';
import { root as apiPrivate } from './saga.api.private';
import { root as elements } from './saga.elements';
import { root as contentImages } from './saga.content.images';
import { root as demo } from './saga.demo';
import { root as gallery } from './saga.gallery';
import { root as importSite } from './saga.import';
import { root as innerNav } from './saga.innerNav';
import { root as exportPage } from './saga.export.page';
import { root as exportSite } from './saga.export';
import { root as pages } from './saga.pages';
import { root as mixer } from './saga.mixer';
import { root as mobileMode } from './saga.mobileMode';
import { root as toLive } from './live/saga.toLive';
import { root as toDraft } from './live/saga.toDraft';
import { PlatformLifeCycleEvents } from '@gdi/types';

function* root() {
    yield* fork(apiPublic);
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(apiPrivate);
    yield* fork(elements);
    yield* fork(gallery);
    yield* fork(demo);
    yield* fork(importSite);
    yield* fork(innerNav);
    yield* fork(exportPage);
    yield* fork(exportSite);
    yield* fork(contentImages);
    yield* fork(mixer);
    yield* fork(mobileMode);
    yield* fork(pages);
    yield* fork(toLive);
    yield* fork(toDraft);
    yield* fork(ping);
}

export const appSagas = [root];
