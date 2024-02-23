import { IBoard } from '@gdi/store-base';
import { Shape, isMobile } from '@gdi/ui';
import React from 'react';
import { ActionHome } from '../../sagas/saga.home';
import { Image, Left, Right, Video, Wrapper } from './DetailsImages.style';

export type DetailsImagesProps = {
  board: IBoard;
  onAction: (action: ActionHome) => void;
};

export function DetailsImages(props: DetailsImagesProps) {
  const { board } = props;
  const { boardInfo } = board;
  const { imageUrl, videoUrl, boardType } = boardInfo;

  const style: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  function renderEmpty() {
    return <></>;
  }

  function renderVideo() {
    if (!videoUrl) {
      return renderEmpty();
    }

    return (
      <iframe
        width='100%'
        height={isMobile() ? 300 : 560}
        src={videoUrl}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <Wrapper
      className='DetailsImages-wrapper'
      data-testid='DetailsImages-wrapper'
    >
      <Left>
        <Image style={style} className='image'>
          <Shape shape={boardType} />
        </Image>
      </Left>
      <Right>
        <Video>{renderVideo()}</Video>
      </Right>
    </Wrapper>
  );
}

export default DetailsImages;
