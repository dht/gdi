import { useDispatch } from '@gdi/store-base';
import { PostWriter } from './PostWriter';
import { WritePostProvider } from './PostWriter.context';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';

export type PostWriterContainerProps = {
  id: string;
};

export function PostWriterContainer(props: PostWriterContainerProps) {
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
      <PostWriter />
    </WritePostProvider>
  );
}

export default PostWriterContainer;
