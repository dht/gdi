import { BoardHeader, TutorialsWidget } from '@gdi/ui';
import { allWidgets } from '@gdi/widgets-starter';
import { Grid, IBoard } from 'igrid';
import { get } from 'lodash';
import { useDarkMode } from './Board.hooks';
import { Wrapper } from './Board.style';

export type BoardProps = {
  board: IBoard;
  flavour: string;
  columnIndex: number;
  darkMode?: boolean;
  callbacks: {
    onColumnChange?: (columnIndex: number) => void;
    onAction: (action: any) => void;
  };
};

export function Board(props: BoardProps) {
  const { board, darkMode, flavour, columnIndex, callbacks } = props;
  const { tutorialPack } = board;
  const forceDarkMode = get(board, 'boardInfo.forceDarkMode');

  const config = {
    darkMode: darkMode || forceDarkMode,
  };

  const name = get(board, 'boardInfo.name');
  const logoColor = get(board, 'boardInfo.logoColor');

  useDarkMode(board);

  function renderTutorialsWidget() {
    if (!tutorialPack) return null;

    return (
      <TutorialsWidget
        tutorialPack={tutorialPack}
        onAction={callbacks.onAction}
        boardId={board.id}
      />
    );
  }

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
      {renderTutorialsWidget()}
    </Wrapper>
  );
}

export default Board;
