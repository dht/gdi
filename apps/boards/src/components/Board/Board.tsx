import { allWidgets } from '@gdi/widgets-starter';
import { BoardHeader } from '@gdi/ui';
import { Grid, IBoard } from 'igrid';
import { Wrapper } from './Board.style';
import { get } from 'lodash';
import { useDarkMode } from './Board.hooks';

export type BoardProps = {
  board: IBoard;
  flavour: string;
  columnIndex: number;
  darkMode?: boolean;
  callbacks: {
    onColumnChange?: (columnIndex: number) => void;
  };
};

const config = {
  darkMode: true,
};

export function Board(props: BoardProps) {
  const { board, darkMode, flavour, columnIndex, callbacks } = props;

  const name = get(board, 'boardInfo.name');
  const logoColor = get(board, 'boardInfo.logoColor');

  useDarkMode(board);

  return (
    <Wrapper
      className='Board-wrapper'
      data-testid='Board-wrapper'
      $logoColor={logoColor}
    >
      <BoardHeader name={name} />
      <Grid
        id='main'
        flavour={flavour}
        widgets={allWidgets}
        config={config}
        elements={board?.elements ?? []}
        hideArrows={board?.mobile?.hideArrows}
        columns={board?.mobile?.columns}
        columnIndex={columnIndex}
        callbacks={callbacks}
      />
    </Wrapper>
  );
}

export default Board;
