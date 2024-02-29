import { invokeEvent } from 'shared-base';
import { Wrapper } from './BoardHeader.style';

export type BoardHeaderProps = {
  name: string;
};

export function BoardHeader(props: BoardHeaderProps) {
  const { name } = props;

  return (
    <Wrapper className='BoardHeader-wrapper' data-testid='BoardHeader-wrapper'>
      {name}
    </Wrapper>
  );
}

export default BoardHeader;
