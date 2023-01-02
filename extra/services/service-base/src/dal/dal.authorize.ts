import * as admin from 'firebase-admin';
import * as tokens from '../utils/tokens';
import { minutesFromNow } from '../utils/date';
import { firebase } from '../utils/firebase';

const COLLECTION_KEY = 'serviceAuthorizations';

const HANDSHAKE_TOKEN_LIFETIME_IN_MINUTES = 5;

export const dalAuthorize = {
    get: () => {
        return firebase //
            .collection(COLLECTION_KEY)
            .get();
    },
    getByPredicate: (predicate: Json) => {
        return firebase //
            .collection(COLLECTION_KEY)
            .getByPredicate(predicate);
    },
    add: async (request: Json) => {
        const { client_id } = request;

        const handshakeToken = await tokens.generateToken();
        const csrfToken = await tokens.generateToken();

        const newRow: Json = {
            clientId: client_id,
            handshakeToken: handshakeToken.valueHashed,
            csrfToken: csrfToken.valueHashed,
            validUntil: minutesFromNow(HANDSHAKE_TOKEN_LIFETIME_IN_MINUTES),
        };

        const result = await firebase.collection(COLLECTION_KEY).add(newRow);

        if (!result.id) {
            throw new Error('Failed to add registration');
        }

        return {
            clientId: client_id,
            handshakeToken: handshakeToken.value,
            csrfToken: csrfToken.value,
            expiresIn: HANDSHAKE_TOKEN_LIFETIME_IN_MINUTES * 60,
        };
    },
    patch: (id: string, change: Json) => {
        return firebase //
            .collection(COLLECTION_KEY)
            .patch(id, change);
    },
    delete: (id: string) => {
        return firebase //
            .collection(COLLECTION_KEY)
            .delete(id);
    },
};
