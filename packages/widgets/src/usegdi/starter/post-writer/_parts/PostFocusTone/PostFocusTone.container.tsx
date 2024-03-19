import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useContext, useMemo } from 'react';
import { PostFocusTone } from './PostFocusTone';
import { WritePostContext } from '../PostFocus/PostFocus.context';

export type PostFocusToneContainerProps = {};

export function PostFocusToneContainer(_props: PostFocusToneContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const postPlatform = useSelector(selectors.options.$postPlatform);
  const postAudience = useSelector(selectors.options.$postAudience);
  const postTone = useSelector(selectors.options.$postTone);
  const { patchState } = useContext(WritePostContext);

  const callbacks = useMemo(
    () => ({
      onChange: (change: Json) => {
        patchState(change);
      },
    }),
    []
  );

  const options = {
    postPlatform,
    postAudience,
    postTone,
  };

  return <PostFocusTone options={options} onChange={callbacks.onChange} />;
}

export default PostFocusToneContainer;
