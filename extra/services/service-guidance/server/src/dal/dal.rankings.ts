import * as admin from 'firebase-admin';
import { firebase } from '@gdi/service-base';

const COLLECTION_KEY = 'rankings';

export const dalRankings = {
    get: () => {
        return firebase //
            .collection(COLLECTION_KEY)
            .getByPredicate({});
    },
};
