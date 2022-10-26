import { root as api } from './saga.api';
import { root as babylon } from './saga.babylon';
import { root as babylonAdd } from './saga.add';
import { root as babylonPick } from './saga.pick';
import { root as babylonHover } from './saga.hover';
import { root as babylonKeyboard } from './saga.keyboard';
import { root as babylonMove } from './saga.move';
import { root as ping } from './ping';
import { take, fork } from 'saga-ts';
import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(ping);
    yield* fork(api);
    yield* fork(babylon);
    yield* fork(babylonAdd);
    yield* fork(babylonPick);
    yield* fork(babylonHover);
    yield* fork(babylonMove);
    yield* fork(babylonKeyboard);
}

export const appSagas = [root];
