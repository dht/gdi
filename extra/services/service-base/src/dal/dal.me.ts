import * as admin from 'firebase-admin';
import { firebase } from '../utils/firebase';

export type IToken = {
    key: string;
};

export const dalMe = {
    get: async (projectKey: string) => {
        return { projectKey };
    },
};
