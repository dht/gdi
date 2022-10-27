import { actions } from './actions';
import { calculateMobileLatency, calculateSession } from './utils/session';
import { endpointsConfigOverrides } from './api';
import { initialState, reducers, clearState } from './initialState';
import { selectors } from './selectors.index';

export const issueKeyToUrl = (issueKey: string) => `${issueKey}`;

import { formatTime, formatDate, formatDuration } from '@gdi/language';
export type { ISessionStats, IActiveTask, IProjects, ITicket } from './types';

export const tasks = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
    utils: {
        calculateSession,
        calculateMobileLatency,
        formatTime,
        formatDuration,
        formatDate,
        issueKeyToUrl,
    },
};
