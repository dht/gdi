import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useContext, useMemo } from 'react';
import { PostWriterTone } from './PostWriterTone';
import { WritePostContext } from '../../PostWriter.context';

export type PostWriterToneContainerProps = {};

export function PostWriterToneContainer(_props: PostWriterToneContainerProps) {
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

  return <PostWriterTone options={options} onChange={callbacks.onChange} />;
}

export default PostWriterToneContainer;
