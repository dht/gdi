import { useDispatch } from '@gdi/store-base';
import { PostFocus } from './PostFocus';
import { WritePostProvider } from './PostFocus.context';
import { useMemo } from 'react';
import { useSagas } from '../../../../../helpers/useSaga';

export type PostFocusContainerProps = {
  id: string;
};

export function PostFocusContainer(props: PostFocusContainerProps) {
  const { id } = props;
  const dispatch = useDispatch();

  useSagas(['widgets.postWriter']);

  const callbacks = useMemo(
    () => ({
      onRunMain: (state: Json) => {
        dispatch({ type: 'POST_WRITER', verb: 'runMain', id, payload: state });
      },
      onRunSingle: (index: number, state: Json) => {
        dispatch({ type: 'POST_WRITER', verb: 'runSingle', id, index, payload: state });
      },
      onRunAll: (state: Json) => {
        dispatch({ type: 'POST_WRITER', verb: 'runAll', id, payload: state });
      },
      onClear: (state: Json) => {
        dispatch({ type: 'POST_WRITER', verb: 'clear', id, payload: state });
      },
    }),
    []
  );

  return (
    <WritePostProvider itemId={id} callbacks={callbacks}>
      <PostFocus />
    </WritePostProvider>
  );
}

export default PostFocusContainer;
