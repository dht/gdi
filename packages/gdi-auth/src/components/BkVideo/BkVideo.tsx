import { useWindowSize } from 'react-use';
import { Wrapper } from './BkVideo.style';
import { useMemo } from 'react';

export type BkVideoProps = {
  index: number;
};

const ids = [
  543344269, 423825754, 555918070, 574425766, 560138399, 744499689, 368789132, 684901780,
];

const ratio = 1.77;

export function BkVideo(props: BkVideoProps) {
  const { index } = props;
  const { width, height } = useWindowSize();

  const style = useMemo(() => {
    let iframeWidth = width;
    let iframeHeight = width / ratio;

    if (iframeHeight < height) {
      iframeHeight = height;
      iframeWidth = height * ratio;
    }

    return {
      width: iframeWidth,
      height: iframeHeight,
      transform: `translateX(-${(iframeWidth - width) / 2}px)`,
    };
  }, [width, height]);

  return (
    <Wrapper className='BkVideo-wrapper' data-testid='BkVideo-wrapper'>
      <iframe
        allowFullScreen
        style={style}
        src={`https://player.vimeo.com/video/${ids[index]}?title=0&background=1&portrait=0&byline=0&autoplay=1&muted=true&loop=1`}
      ></iframe>
    </Wrapper>
  );
}

export default BkVideo;
