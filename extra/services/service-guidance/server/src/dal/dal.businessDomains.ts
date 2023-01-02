import * as admin from 'firebase-admin';
import { firebase } from '@gdi/service-base';

const COLLECTION_KEY = 'businessDomains';

export const dalBusinessDomains = {
    get: (language: string = 'en') => {
        return firebase //
            .collection(COLLECTION_KEY)
            .getByPredicate({
                language,
            });
    },
};
