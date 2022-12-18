import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: ['stats', 'statsJourneys', 'inboxMessages'],
    });

    const promises = [
        yield* put(actions.stats.get()),
        yield* put(actions.statsJourneys.get()),
        yield* put(actions.inboxMessages.get({})),
        yield* put(actions.studioBoards.get({})),
        yield* put(actions.studioCameras.get({})),
        yield* put(actions.studioGrounds.get({})),
        yield* put(actions.studioExternals.get({})),
        yield* put(actions.studioLights.get({})),
        yield* put(actions.studioMicroAnimations.get({})),
        yield* put(actions.studioPacks.get({})),
        yield* put(actions.studioParticles.get({})),
        yield* put(actions.studioSounds.get({})),
        yield* put(actions.studioSprites.get({})),
        yield* put(actions.studioVideos.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
