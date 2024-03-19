import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PostWriter } from './PostWriter';

export type PostWriterContainerProps = {};

export function PostWriterContainer(_props: PostWriterContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <PostWriter />;
}

export default PostWriterContainer;
