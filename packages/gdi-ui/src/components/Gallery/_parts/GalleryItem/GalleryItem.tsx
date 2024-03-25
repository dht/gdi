import classnames from 'classnames';
import React, { useMemo, useState } from 'react';
import Ratings from '../../../Ratings/Ratings';
import Shape from '../../../Shape/Shape';
import {
  Description,
  Details,
  Identifier,
  Image,
  Media,
  Name,
  Row,
  Soon,
  Tags,
  Version,
  Video,
  Wip,
  Wrapper,
} from './GalleryItem.style';
import { isMobile } from '../../../../utils/mobile';

export type GalleryItemProps = {
  board: Json;
  onClick: (board: Json) => void;
  width: number;
};

export function GalleryItem(props: GalleryItemProps) {
  const { board, width } = props;
  const { identifier, version, reviewInfo, isActive, isWip, boardInfo } = board;
  const { index, name, description, imageUrl, boardType, videoThumbUrl } = boardInfo;
  const [hover, setHover] = useState(false);

  const { reviewsCount = 0, rating = 0 } = reviewInfo ?? {};

  const style: React.CSSProperties = useMemo(
    () => ({
      width: width - 20,
    }),
    [width]
  );

  const styleImage: React.CSSProperties = useMemo(
    () => ({
      backgroundImage: `url(${imageUrl})`,
      width: width - 20,
    }),
    [imageUrl]
  );

  const className = classnames('GalleryItem-wrapper', {
    soon: !isActive,
    wip: isWip,
  });

  function renderVideo() {
    return <Video src={videoThumbUrl} autoPlay style={styleImage} />;
  }

  function renderImage() {
    if (hover && videoThumbUrl && !isMobile()) {
      return renderVideo();
    }

    return (
      <Image className='image' style={styleImage}>
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
      style={style}
    >
      <Media>{renderImage()}</Media>
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
