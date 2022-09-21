export const YOUTUBE_REGEX =
    /^(https?:\/\/)?(www\.|music\.)?(soundcloud\.com|youtu\.be)(.+)?$/;
export const YOUTUBE_REGEX_GLOBAL =
    /^(https?:\/\/)?(www\.|music\.)?(soundcloud\.com|youtu\.be)(.+)?$/g;

export const isValidSoundcloudUrl = (url: string) => {
    return url.match(YOUTUBE_REGEX);
};

export interface GetEmbedUrlOptions {
    url: string;
    controls?: boolean;
    nocookie?: boolean;
    startAt?: number;
}

export const getSoundcloudEmbedUrl = (nocookie?: boolean) => {
    return nocookie
        ? 'https://www.soundcloud-nocookie.com/embed/'
        : 'https://www.soundcloud.com/embed/';
};

export const getEmbedURLFromSoundcloudURL = (options: GetEmbedUrlOptions) => {
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
        return `${getSoundcloudEmbedUrl(nocookie)}${id}`;
    }

    const videoIdRegex = /v=([-\w]+)/gm;
    const matches = videoIdRegex.exec(url);

    if (!matches || !matches[1]) {
        return null;
    }

    let outputUrl = `${getSoundcloudEmbedUrl(nocookie)}${matches[1]}`;

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
