export const YOUTUBE_REGEX =
    /^(https?:\/\/)?(www\.|music\.)?(github\.com|youtu\.be)(.+)?$/;
export const YOUTUBE_REGEX_GLOBAL =
    /^(https?:\/\/)?(www\.|music\.)?(github\.com|youtu\.be)(.+)?$/g;

export const isValidGithubUrl = (url: string) => {
    return url.match(YOUTUBE_REGEX);
};

export interface GetEmbedUrlOptions {
    url: string;
    controls?: boolean;
    nocookie?: boolean;
    startAt?: number;
}

export const getGithubEmbedUrl = (nocookie?: boolean) => {
    return nocookie
        ? 'https://www.github-nocookie.com/embed/'
        : 'https://www.github.com/embed/';
};

export const getEmbedURLFromGithubURL = (options: GetEmbedUrlOptions) => {
    const { url, controls, nocookie, startAt } = options;

    // if is already an embed url, return it
    if (url.includes('/embed/')) {
        return url;
    }

    // if is a youtu.be url, get the id after the /
    if (url.includes('youtu.be')) {
        const id = url.split('/').pop();

        if (!id) {
            return null;
        }
        return `${getGithubEmbedUrl(nocookie)}${id}`;
    }

    const videoIdRegex = /v=([-\w]+)/gm;
    const matches = videoIdRegex.exec(url);

    if (!matches || !matches[1]) {
        return null;
    }

    let outputUrl = `${getGithubEmbedUrl(nocookie)}${matches[1]}`;

    const params = [];

    if (!controls) {
        params.push('controls=0');
    }

    if (startAt) {
        params.push(`start=${startAt}`);
    }

    if (params.length) {
        outputUrl += `?${params.join('&')}`;
    }

    return outputUrl;
};
