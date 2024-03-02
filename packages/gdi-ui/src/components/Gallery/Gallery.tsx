import { useMeasureOnce } from '../../hooks/useMeasureOnce';
import { useItems } from './Gallery.hooks';
import { Item, Wrapper } from './Gallery.style';
import GalleryItem from './_parts/GalleryItem/GalleryItem';
import { FixedSizeGrid } from 'react-window';

export type GalleryProps = {
  boards: Json[];
  filter: string;
  q?: string;
  onClick: (board: Json) => void;
  extraCard?: any;
};

export function Gallery(props: GalleryProps) {
  const { boards, filter, q = '', extraCard } = props;
  const [ref, { width, height }] = useMeasureOnce();

  const items = useItems(boards, q, filter);

  const columnCount = 5;
  const columnWidth = (width - 10) / columnCount;
  const rowHeight = columnWidth * 1.6;
  const rowCount = Math.ceil(items.length / columnCount);

  function renderExtra() {
    if (!extraCard) return;

    const Cmp = extraCard as any;

    return <Cmp />;
  }

  function renderItem(rowsProps: any) {
    const { columnIndex, rowIndex, style } = rowsProps;
    const data = items[rowIndex * columnCount + columnIndex];

    if (!data) return null;

    return (
      <Item style={style}>
        <GalleryItem board={data} onClick={() => props.onClick(data)} />
      </Item>
    );
  }

  return (
    <Wrapper className='Gallery-wrapper' data-testid='Gallery-wrapper' ref={ref}>
      <FixedSizeGrid
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={window.innerHeight - 160} // Adjust based on your needs
        rowCount={rowCount}
        rowHeight={rowHeight}
        width={width} // Adjust to fit the container or desired width
      >
        {renderItem}
      </FixedSizeGrid>
      {renderExtra()}
    </Wrapper>
  );
}

export default Gallery;
