import { useEffect } from 'react';
import { Wrapper, Image, Prompt, Content, Actions } from './ImageViewer.style';
import { useMeasure } from 'react-use';
import { useMeasureOnce } from '@gdi/ui';

export type ImageViewerProps = {
  prompt?: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

export function ImageViewer(props: ImageViewerProps) {
  const { prompt, imageUrl } = props;
  const [ref, { width, height }] = useMeasureOnce();

  useEffect(() => {}, [imageUrl]);

  const style: React.CSSProperties = {
    maxWidth: width - 50 + 'px',
    maxHeight: height - 50 + 'px',
  };

  return (
    <Wrapper ref={ref} className='ImageViewer-wrapper' data-testid='ImageViewer-wrapper'>
      <Prompt>{prompt}</Prompt>
      <Content>
        <Image alt='' src={imageUrl} style={style} draggable={false} />
      </Content>
      <Actions>{props.children}</Actions>
    </Wrapper>
  );
}

export default ImageViewer;
