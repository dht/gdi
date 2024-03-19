import { Icon } from '@gdi/ui';
import { Wrapper } from './PostFocusActions.style';

export type PostFocusActionsProps = {
  onRun: () => void;
  onClear: () => void;
};

export function PostFocusActions(props: PostFocusActionsProps) {
  return (
    <Wrapper className='PostFocusActions-wrapper' data-testid='PostFocusActions-wrapper'>
      <Icon name='send' onClick={props.onRun}></Icon>
      <Icon name='refresh' onClick={props.onClear}></Icon>
    </Wrapper>
  );
}

export default PostFocusActions;
