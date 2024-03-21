import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Posts } from './Posts';
import { useSagas } from '../../../helpers/useSaga';

export type PostsContainerProps = {
  data: any;
};

export function PostsContainer(props: PostsContainerProps) {
  const dispatch = useDispatch();
  const posts = useSelector(selectors.md.$posts);

  useSagas([
    'widgets.posts', //
    'widgets.post',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'POST',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'POST',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Posts data={posts} callbacks={callbacks} />;
}

export default PostsContainer;
