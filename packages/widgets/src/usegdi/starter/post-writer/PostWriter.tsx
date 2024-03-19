import { useContext } from 'react';
import { PostWriterActions } from './_parts/PostWriterActions/PostWriterActions';
import { PostWriterEditor as Editor } from './_parts/PostWriterEditor/PostWriterEditor';
import { PostWriterToneContainer } from './_parts/PostWriterTone/PostWriterTone.container';
import { PostWriterViews } from './_parts/PostWriterViews/PostWriterViews';
import { WritePostContext } from './PostWriter.context';
import { GridPanel, Wrapper } from './PostWriter.style';

export type PostWriterProps = {};

export function PostWriter(props: PostWriterProps) {
  const { callbacks } = useContext(WritePostContext);
  const { state } = useContext(WritePostContext);

  return (
    <Wrapper className='PostWriter-wrapper' data-testid='PostWriter-wrapper'>
      <GridPanel className='context'>
        <Editor id='context' placeholder='context, i.e original post' />
      </GridPanel>
      <GridPanel className='body'>
        <Editor
          id='body'
          placeholder='write a reply...'
          instructionsId={0}
          isRunning={state.isRunningMain}
          onRun={callbacks.onRunMain}
        />
      </GridPanel>
      <GridPanel className='output1'>
        <Editor
          id='output1'
          instructionsId={1}
          placeholder='output'
          label='B1'
          isRunning={state.isRunning1}
          onRun={() => callbacks.onRunSingle(1)}
          onAdopt={() => callbacks.onAdopt(1)}
        />
      </GridPanel>
      <GridPanel className='output2'>
        <Editor
          id='output2'
          instructionsId={2}
          placeholder='output'
          label='B2'
          isRunning={state.isRunning2}
          onRun={() => callbacks.onRunSingle(2)}
          onAdopt={() => callbacks.onAdopt(2)}
        />
      </GridPanel>
      <GridPanel className='output3'>
        <Editor
          id='output3'
          instructionsId={3}
          placeholder='output'
          label='B3'
          isRunning={state.isRunning3}
          onRun={() => callbacks.onRunSingle(3)}
          onAdopt={() => callbacks.onAdopt(3)}
        />
      </GridPanel>
      <GridPanel className='tone'>
        <PostWriterToneContainer />
      </GridPanel>
      <GridPanel className='views'>
        <PostWriterViews />
      </GridPanel>
      <GridPanel className='actions'>
        <PostWriterActions onRun={callbacks.onRunAll} onClear={callbacks.onClear} />
      </GridPanel>
    </Wrapper>
  );
}

export default PostWriter;
