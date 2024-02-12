import classnames from 'classnames';
import React, { useMemo } from 'react';
import Ratings from '../../../Ratings/Ratings';
import Shape from '../../../Shape/Shape';
import {
  Description,
  Details,
  Identifier,
  Image,
  Name,
  Row,
  Soon,
  Tags,
  Version,
  Wip,
  Wrapper,
} from './GalleryItem.style';

export type GalleryItemProps = {
  board: Json;
  onClick: (board: Json) => void;
};

export function GalleryItem(props: GalleryItemProps) {
  const { board } = props;
  const { identifier, version, reviewInfo, isActive, isWip, boardInfo } = board;
  const { index, name, description, imageUrl, boardType } = boardInfo;
  const { reviewsCount = 0, rating = 0 } = reviewInfo ?? {};

  const style: React.CSSProperties = useMemo(
    () => ({
      backgroundImage: `url(${imageUrl})`,
    }),
    [imageUrl]
  );

  const className = classnames('GalleryItem-wrapper', {
    soon: !isActive,
    wip: isWip,
  });

  return (
    <Wrapper
      className={className}
      data-testid='GalleryItem-wrapper'
      onClick={() => props.onClick(board)}
    >
      <Image className='image' style={style}>
        <Shape shape={boardType} />
      </Image>
      <Soon className='soon'>Soon</Soon>
      <Wip className='wip'>Work in progress</Wip>
      <Details>
        <Row>
          <Name className='name'>
            {index}. <span>{name}</span>
          </Name>
          <Ratings value={rating} count={reviewsCount} />
        </Row>
        <Row>
          <Identifier>{identifier}</Identifier>
          <Version>{version}</Version>
        </Row>
        <Description>{description}</Description>
        <Tags></Tags>
      </Details>
    </Wrapper>
  );
}

export default GalleryItem;
