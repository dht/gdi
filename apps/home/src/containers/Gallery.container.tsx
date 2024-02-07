import { IBoard, selectors, useSelector } from '@gdi/store-base';
import { Gallery } from '@gdi/ui';

export type GalleryContainerProps = {
  boards: IBoard[];
  onClick: (board: any) => void;
  extraCard?: any;
};

export function GalleryContainer(props: GalleryContainerProps) {
  const { boards, extraCard } = props;
  const appState = useSelector(selectors.raw.$rawAppState);

  return (
    <Gallery
      boards={boards}
      extraCard={extraCard}
      filter={appState.filter}
      q={appState.q}
      onClick={props.onClick}
    />
  );
}

export default GalleryContainer;
