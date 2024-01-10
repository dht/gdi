import { allWidgets } from '@gdi/widgets-starter';
import { BoardHeader } from '@gdi/ui';
import { Grid, IBoard } from 'igrid';
import { Wrapper } from './Board.style';
import { get } from 'lodash';
import { useDarkMode } from './Board.hooks';

export type BoardProps = {
  board: IBoard;
  flavour: string;
};

export function Board(props: BoardProps) {
  const { board, flavour } = props;

  const name = get(board, 'boardInfo.name');

  useDarkMode(board);

  return (
    <Wrapper className='Board-wrapper' data-testid='Board-wrapper'>
      <BoardHeader name={name} />
      <Grid
        id='main'
        flavour={flavour}
        widgets={allWidgets}
        elements={board?.elements ?? []}
      />
    </Wrapper>
  );
}

export default Board;
