import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $inboxMessages = createSelector(
    base.$inboxMessages,
    (inboxMessages) => {
        return inboxMessages;
    }
);
