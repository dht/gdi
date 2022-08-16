import { Drawer, Modal } from '@gdi/web-ui';
import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMount, useBoolean, useUnmount } from 'react-use';

type OverlayContainerProps = {
    isModal: boolean;
    children: JSX.Element;
    title?: string;
};

export function OverlayContainer(props: OverlayContainerProps) {
    const { isModal, title } = props;
    const [open, toggleOpen] = useBoolean(true);
    const dispatch = useDispatch();
    const setSafeTimeout = useSafeTimeout();

    const OverlayCmp = isModal ? Modal : Drawer;

    useMount(() => {
        toggleOpen(true);
    });

    function onClose() {
        toggleOpen(false);

        setSafeTimeout(
            () => {
                dispatch({ type: 'NAVIGATION_BACK' });
            },
            isModal ? 200 : 350
        );
    }

    return (
        <OverlayCmp open={open} title={title} onClose={onClose}>
            {props.children}
        </OverlayCmp>
    );
}

type Callback = () => void;

function useSafeTimeout() {
    const timeoutRef = useRef<any>();

    const setSafeTimeout = useCallback(
        (callback: Callback, delay: number = 0) => {
            clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                callback();
            }, delay);
        },
        []
    );

    useUnmount(() => {
        clearTimeout(timeoutRef.current);
    });

    return setSafeTimeout;
}
