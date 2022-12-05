import React, { useCallback, useRef } from 'react';
import { useInOutAnimation } from './useInOutAnimation';
import { useRemoteContent } from './useRemoteContent';
import { useUnmount } from 'react-use';

export function usePopup(onCloseParent: () => void): Return {
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    const [className, { onClose: onCloseAnimation }] = useInOutAnimation(true, {
        inAnimation: 'bounceIn',
        outAnimation: 'bounceOut',
    });

    const onClose = useCallback(() => {
        onCloseAnimation();

        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            onCloseParent();
        }, 1000);
    }, []);

    useUnmount(() => {
        clearTimeout(timeout.current);
    });

    return { className, onClose };
}

type Return = {
    className: string;
    onClose: () => void;
};

export function usePopupRemote(
    contentUrl: string,
    onCloseParent: () => void
): ReturnRemote {
    const content = useRemoteContent(contentUrl);
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    const wasContentFetched = typeof content !== 'undefined';

    const [className, { onClose: onCloseAnimation }] = useInOutAnimation(
        wasContentFetched,
        {
            inAnimation: 'bounceIn',
            outAnimation: 'bounceOut',
        }
    );

    const onClose = useCallback(() => {
        onCloseAnimation();

        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            onCloseParent();
        }, 1000);
    }, []);

    useUnmount(() => {
        clearTimeout(timeout.current);
    });

    return [content, { className, onClose }];
}

type ReturnRemote = [
    Json | string | undefined,
    {
        className: string;
        onClose: () => void;
    }
];
