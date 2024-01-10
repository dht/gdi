import { Wrapper } from './Board.style';

export type BoardProps = {};

export function Board(_props: BoardProps) {
  return (
    <Wrapper className='Board-wrapper' data-testid='Board-wrapper'>
      Board
    </Wrapper>
  );
}

export default Board;
