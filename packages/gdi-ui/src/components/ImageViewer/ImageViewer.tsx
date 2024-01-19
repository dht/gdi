import React from 'react';
import JsonViewer from '../JsonViewer/JsonViewer';
import { Image, Wrapper } from './ImageViewer.style';

export type ImageViewerProps = {
  imageUrl: string;
};

export function ImageViewer(props: ImageViewerProps) {
  const { imageUrl } = props;

  const style: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <Wrapper className='ImageViewer-wrapper' data-testid='ImageViewer-wrapper'>
      <Image style={style} />
    </Wrapper>
  );
}

export default ImageViewer;
