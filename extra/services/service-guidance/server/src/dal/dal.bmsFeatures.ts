import * as admin from 'firebase-admin';
import { firebase } from '@gdi/service-base';

const COLLECTION_KEY = 'bmsFeatures';

export const dalBmsFeatures = {
    get: (language: string = 'en') => {
        return firebase //
            .collection(COLLECTION_KEY)
            .getByPredicate({
                language,
            });
    },
};
