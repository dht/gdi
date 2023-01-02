import * as admin from 'firebase-admin';
import { firebase } from '@gdi/service-base';

const COLLECTION_KEY = 'requirements';

export const dalRequirements = {
    get: () => {
        return firebase //
            .collection(COLLECTION_KEY)
            .getByPredicate({});
    },
};
