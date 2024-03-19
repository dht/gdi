import { Icon } from '@gdi/ui';
import { Wrapper } from './PostWriterActions.style';

export type PostWriterActionsProps = {
  onRun: () => void;
  onClear: () => void;
};

export function PostWriterActions(props: PostWriterActionsProps) {
  return (
    <Wrapper className='PostWriterActions-wrapper' data-testid='PostWriterActions-wrapper'>
      <Icon name='send' onClick={props.onRun}></Icon>
      <Icon name='refresh' onClick={props.onClear}></Icon>
    </Wrapper>
  );
}

export default PostWriterActions;
