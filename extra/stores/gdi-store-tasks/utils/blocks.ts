const URL_SCHEMA = 'tasks://{ticketKey}';

export const urlToTicketKey = (url: string): string | undefined => {
    const matches = /tasks:\/\/([a-zA-Z-0-9]+)/g.exec(url);

    if (matches) {
        return matches[1];
    }

    return undefined;
};

export const ticketKeyToUrl = (ticketKey: string): string => {
    return URL_SCHEMA.replace('{ticketKey}', ticketKey);
};
