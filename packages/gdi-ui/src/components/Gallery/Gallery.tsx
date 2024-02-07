import { useItems } from './Gallery.hooks';
import { Wrapper } from './Gallery.style';
import GalleryItem from './_parts/GalleryItem/GalleryItem';

export type GalleryProps = {
  boards: Json[];
  filter: string;
  q?: string;
  onClick: (board: Json) => void;
  extraCard?: any;
};

export function Gallery(props: GalleryProps) {
  const { boards, filter, q = '', extraCard } = props;

  const items = useItems(boards, q, filter);

  function renderExtra() {
    if (!extraCard) return;

    const Cmp = extraCard as any;

    return <Cmp />;
  }

  function renderItem(board: Json) {
    return <GalleryItem onClick={props.onClick} key={board.id} board={board} />;
  }

  function renderItems() {
    return items.map((board: Json) => renderItem(board));
  }

  return (
    <Wrapper className='Gallery-wrapper' data-testid='Gallery-wrapper'>
      {renderItems()}
      {renderExtra()}
    </Wrapper>
  );
}

export default Gallery;
