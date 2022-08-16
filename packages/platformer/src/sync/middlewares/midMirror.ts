import * as sockets from '../utils/sockets';

export const middlewareMirror =
    (_store: any) => (next: any) => (action: any) => {
        if (sockets.isSocketServer || !action.isRemote) {
            sockets.remoteAction(action);
        }

        return next(action);
    };
