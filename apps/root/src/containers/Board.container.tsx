import { Board } from '@gdi/app-boards';
import { useParams } from 'react-router-dom';

export type BoardContainerProps = {};

export function BoardContainer(props: BoardContainerProps) {
  const { id } = useParams();

  return <Board id={id} darkMode={false} />;
}

export default BoardContainer;
