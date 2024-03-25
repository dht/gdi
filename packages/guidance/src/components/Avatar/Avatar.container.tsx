import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Avatar } from './Avatar';

export type AvatarContainerProps = {};

export function AvatarContainer(_props: AvatarContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Avatar />;
}

export default AvatarContainer;
