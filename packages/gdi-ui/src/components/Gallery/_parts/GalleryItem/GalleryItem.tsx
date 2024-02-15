import classnames from 'classnames';
import React, { useMemo, useState } from 'react';
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
  Video,
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
  const { index, name, description, imageUrl, boardType, videoThumbUrl } = boardInfo;
  const [hover, setHover] = useState(false);

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

  function renderVideo() {
    return <Video src={videoThumbUrl} autoPlay style={style} />;
  }

  function renderImage() {
    if (hover && videoThumbUrl) {
      return renderVideo();
    }

    return (
      <Image className='image' style={style}>
        <Shape shape={boardType} />
      </Image>
    );
  }

  return (
    <Wrapper
      className={className}
      data-testid='GalleryItem-wrapper'
      onClick={() => props.onClick(board)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {renderImage()}
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
