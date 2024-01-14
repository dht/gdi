import { IBoard, selectors, useSelector } from '@gdi/store-base';
import { Gallery } from '@gdi/ui';

export type GalleryContainerProps = {
  boards: IBoard[];
  onClick: (board: any) => void;
};

export function GalleryContainer(props: GalleryContainerProps) {
  const { boards } = props;
  const appState = useSelector(selectors.raw.$rawAppState);

  return (
    <Gallery
      boards={boards}
      filter={appState.filter}
      q={appState.q}
      onClick={props.onClick}
    />
  );
}

export default GalleryContainer;
