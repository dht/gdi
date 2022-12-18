import React, { useState } from 'react';
import { useMount } from 'react-use';

export function useRemoteContent(contentUrl: string) {
    const [content, setContent] = useState<Json | string>();

    useMount(() => {
        if (!contentUrl) {
            return;
        }

        try {
            fetch(contentUrl)
                .then((res) => res.text())
                .then((body) => {
                    setContent(parseJson(body));
                });
        } catch (_err) {
            console.log('_err ->', _err);
        }
    });

    return content;
}

export const parseJson = (content: string) => {
    try {
        return JSON.parse(content);
    } catch (err) {
        return content;
    }
};
