import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as apiPublic } from './saga.api.public';
import { root as apiPrivate } from './saga.api.private';
import { root as elements } from './saga.elements';
import { root as contentImages } from './saga.content.images';
import { root as demo } from './saga.demo';
import { root as gallery } from './saga.gallery';
import { root as importData } from './import/saga.import.data';
import { root as importPage } from './import/saga.import.page';
import { root as importSite } from './import/saga.import.site';
import { root as importImages } from './import/saga.import.images';
import { root as exportSite } from './export/saga.export';
import { root as exportPage } from './export/saga.export.page';
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
    yield* fork(importData);
    yield* fork(importPage);
    yield* fork(importSite);
    yield* fork(importImages);
    yield* fork(exportSite);
    yield* fork(exportPage);
    yield* fork(contentImages);
    yield* fork(mixer);
    yield* fork(pages);
    yield* fork(ping);
}

export const appSagas = [root];
