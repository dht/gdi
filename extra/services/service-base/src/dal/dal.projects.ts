import * as admin from 'firebase-admin';
import { firebase } from '../utils/firebase';
import { now } from '../utils/date';
import { Json } from '../types';

export type IProject = {
    projectKey: string;
};

const COLLECTION_KEY = 'serviceProjects';

export const dalProjects = {
    getAll: () => {
        return firebase.collection(COLLECTION_KEY).get();
    },
    getById: (id: string) => {
        return firebase.collection(COLLECTION_KEY).getById(id);
    },
    add: async (project: IProject) => {
        const { projectKey } = project;

        const result = await firebase.collection(COLLECTION_KEY).add({
            projectKey,
            created: now(),
        });

        if (!result.id) {
            throw new Error('Failed to add project');
        }

        return result;
    },
    patch: (id: string, change: Json) => {
        return firebase //
            .collection(COLLECTION_KEY)
            .patch(id, change);
    },
};
