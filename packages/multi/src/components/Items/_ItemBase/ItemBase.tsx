import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IItem } from '../../../types';
import { MasonryItemProps } from '../../Masonry/Masonry';
import { Image, ImageOverlay, Images, Wrapper } from './ItemBase.style';

export type ItemBaseProps = MasonryItemProps & {
  item: IItem;
  backgroundColor?: string;
  children?: JSX.Element | JSX.Element[];
  topSectionHeight?: number;
};

export function ItemBase(props: ItemBaseProps) {
  const { item: image, backgroundColor, topSectionHeight, isFocused } = props;
  const [showFull, setShowFull] = useState(false);

  const { id, style, imageUrl, imageThumbUrl } = image;

  const styleImages: React.CSSProperties = {};

  if (topSectionHeight) {
    styleImages.height = (topSectionHeight ?? 0) + 'px';
  }

  // DOMs are recycled
  useEffect(() => {
    setShowFull(false);
  }, [id]);

  function onClick(ev: any) {
    props.onClick(id, image);

    if (props.onMouseEvent) {
      props.onMouseEvent(ev);
    }
  }

  function onDoubleClick(ev: any) {
    props.onDoubleClick(id);

    if (props.onMouseEvent) {
      props.onMouseEvent(ev);
    }
  }

  function renderFull() {
    if (!showFull) {
      return;
    }

    return <Image url={imageUrl} className='masonry-image' />;
  }

  const className = classnames('ItemBase-wrapper', {
    focused: isFocused,
  });

  return (
    <Wrapper
      style={style ?? {}}
      $backgroundColor={backgroundColor}
      onMouseDown={onClick}
      onTouchStart={onClick}
      className={className}
      onDoubleClick={onDoubleClick}
      onMouseOver={() => setShowFull(true)}
    >
      <Images style={styleImages}>
        <Image url={imageThumbUrl} className='masonry-image' />
        {renderFull()}
      </Images>
      {props.children}
      <ImageOverlay>{props.renderOverlay(image)}</ImageOverlay>
    </Wrapper>
  );
}

export default ItemBase;
