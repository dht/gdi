import { generateReducersForStore } from 'redux-store-generator';
import { ITasksStore } from './types';
import { actions } from './actions';
import p from '../package.json';

export const initialState: ITasksStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateTasks: {
        stateKey: 'tasks',
        ticketToWrite: '',
        isReloadingData: false,
        lastNfcValue: '',
        lastNfcTimestamp: 0,
    },
    currentIdsTasks: {
        sessionId: '',
        projectId: '',
        projectKey: '',
    },
    worklogs: {
        '1': {
            id: '1',
            identifier: '1',
            started: '',
            ticketKey: '',
            timeSpent: '',
            timeSpentSeconds: 0,
            comment: {},
            author: '',
            tags: [],
            dataTags: [],
        },
    },
    recentSessions: {
        '1': {
            id: '1',
            ticketKey: 'BLKR-1',
            startTimestamp: 423,
            endTimestamp: 443,
            verb: 'done',
        },
    },
    projects: {
        '1': {
            id: '1',
            key: 'BUS',
            name: 'Business',
            projectType: 'software',
            avatarUrls: {
                thumb48: '',
                thumb32: '',
                thumb24: '',
                thumb16: '',
            },
            tags: [],
            dataTags: [],
        },
        '2': {
            id: '2',
            key: 'CREAT',
            name: 'Music & creativity',
            projectType: 'software',
            avatarUrls: {
                thumb48: '',
                thumb32: '',
                thumb24: '',
                thumb16: '',
            },
            tags: [],
        },
    },
    tickets: {
        '1': {
            id: '1',
            key: 'BUS-1',
            issueType: 'Story',
            priority: 'Medium',
            status: 'To Do',
            timeEstimate: 420,
            creator: 'email@gmail.com',
            reporter: 'email@gmail.com',
            summary: 'print list of stations',
            progress: 30,
            progressTotal: 10800,
            description: {},
            projectId: '1',
            projectKey: 'MUSE',
            tags: [],
            dataTags: [],
        },
    },
    sessions: {
        '1': {
            id: '1',
            ticketKey: '',
            estimation: '',
            startTimestamp: 0,
            endTimestamp: 0,
            breakStartTimestamp: 0,
            breakTimeTotal: 0,
            lastVerb: 'start',
            lastVerbTimestamp: 0,
            tags: [],
            dataTags: [],
        },
    },
};

export const reducers = generateReducersForStore<ITasksStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.worklogs.setAll({}));
        store.dispatch(actions.recentSessions.setAll({}));
        store.dispatch(actions.projects.setAll({}));
        store.dispatch(actions.tickets.setAll({}));
        store.dispatch(actions.sessions.setAll({}));
    });
};
