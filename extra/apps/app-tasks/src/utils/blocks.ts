const URL_SCHEMA = 'tasks://{issueKey}';

export const urlToIssueKey = (url: string): string | undefined => {
    const matches = /tasks:\/\/([a-zA-Z-0-9]+)/g.exec(url);

    if (matches) {
        return matches[1];
    }

    return undefined;
};

export const issueKeyToUrl = (issueKey: string): string => {
    return URL_SCHEMA.replace('{issueKey}', issueKey);
};
