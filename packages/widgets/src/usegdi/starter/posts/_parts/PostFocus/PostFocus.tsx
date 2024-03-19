import { useContext } from 'react';
import { PostFocusActions } from '../PostFocusActions/PostFocusActions';
import { PostFocusEditor as Editor } from '../PostFocusEditor/PostFocusEditor';
import { PostFocusToneContainer } from '../PostFocusTone/PostFocusTone.container';
import { PostFocusViews } from '../PostFocusViews/PostFocusViews';
import { WritePostContext } from './PostFocus.context';
import { GridPanel, Wrapper } from './PostFocus.style';

export type PostFocusProps = {};

export function PostFocus(props: PostFocusProps) {
  const { callbacks } = useContext(WritePostContext);
  const { state } = useContext(WritePostContext);

  return (
    <Wrapper className='PostFocus-wrapper' data-testid='PostFocus-wrapper'>
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
        <PostFocusToneContainer />
      </GridPanel>
      <GridPanel className='views'>
        <PostFocusViews />
      </GridPanel>
      <GridPanel className='actions'>
        <PostFocusActions onRun={callbacks.onRunAll} onClear={callbacks.onClear} />
      </GridPanel>
    </Wrapper>
  );
}

export default PostFocus;
