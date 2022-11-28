// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A16 = {};

declare global {
    export type ITasksStore = StoreStructure & {
        meta: IGdiMeta;
        appStateTasks: ITasksState;
        currentIdsTasks: ICurrentIdsTasks;
        projects: IProjects;
        tickets: ITickets;
        sessions: ISessions;
        worklogs: IWorklogs;
        recentSessions: IRecentSessions;
    };

    export type ITasksState = {
        stateKey: string;
        ticketToWrite?: string;
        isReloadingData: boolean;
        lastNfcValue?: string;
        lastNfcTimestamp?: number;
        lastSyncTimestamp?: number;
    };

    export type ICurrentIdsTasks = {
        sessionId?: string;
        taskId?: string;
        projectId?: string;
        projectKey?: string;
    };

    export type IProject = {
        id: string;
        key: string;
        name: string;
        avatarUrls?: IAvatarUrls;
        projectType?: string;
        color?: string;
        order?: number;
        tags: string[];
    };

    export type ITicket = {
        id: string;
        key: string;
        issueType: string;
        priority: string;
        status: string;
        timeEstimate?: number;
        creator: string;
        reporter: string;
        summary: string;
        progress: number;
        progressTotal: number;
        description?: any;
        isContinuous?: boolean;
        widgetId?: string;
        projectId: string;
        projectKey: string;
        order?: number;
    };

    export type ISession = {
        id: string;
        ticketKey: string;
        estimation?: string;
        startTimestamp: number;
        endTimestamp: number;
        breakStartTimestamp: number;
        breakTimeTotal: number;
        lastVerb?: ITaskVerb;
        lastVerbTimestamp: number;
    };

    export type IWorklog = {
        id: string;
        identifier: string;
        started: string;
        ticketKey: string;
        timeSpent: string;
        timeSpentSeconds: number;
        comment: any;
        author: string;
        order?: number;
    };

    export type IRecentSession = {
        id: string;
        ticketKey: string;
        startTimestamp: number;
        endTimestamp?: number;
        verb?: ITaskVerb;
    };

    export type ITaskVerb =
        | 'start'
        | 'done'
        | 'stop'
        | 'cancel'
        | 'pause'
        | 'resume';

    export type Entity = 'server' | 'mobile' | 'ui';

    export type IAvatarUrls = {
        thumb48: string;
        thumb32: string;
        thumb24: string;
        thumb16: string;
    };

    export type IProjects = Record<string, IProject>;
    export type ITickets = Record<string, ITicket>;
    export type ISessions = Record<string, ISession>;
    export type IWorklogs = Record<string, IWorklog>;
    export type IRecentSessions = Record<string, IRecentSession>;

    export type CompactDuration = {
        totalText: string;
        totalSeconds: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    };

    export type ISessionStats = {
        startTimestamp: number;
        estimationExists: boolean;
        sessionElapsedTime: number;
        sessionElapsedTimeWithBreaks: number;
        breakTimeTotal: number;
        breakTimeCurrent: number;
        estimation: number;
        progressBeforeSession: number;
        progressWithSession: number;
        timeLeft: number;
        percent: number;
        oneHourPercent: number;
        duration: CompactDuration;
        isInBreak: boolean;
        isRunning: boolean;
        currentSessionSequence: number;
    };

    export type IActiveTask = {
        ticket: ITicket;
        session: ISession;
        stats: ISessionStats;
        isLoaded: boolean;
    };

    export type ProjectColors = Record<string, string | undefined>;
}
