import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PostsSummary } from './PostsSummary';

export type PostsSummaryContainerProps = {};

export function PostsSummaryContainer(_props: PostsSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <PostsSummary />;
}

export default PostsSummaryContainer;
