import { useEffect, useRef, useState } from 'react';
import { YouTubeEmbed } from 'react-social-media-embed';
import { Wrapper } from './Youtube.style';
import { useMeasure, useMount } from 'react-use';
import { useYoutubePlaybackTime } from './Youtube.hooks';
import { invokeEvent } from 'shared-base';

export type YoutubeProps = {
  videoId: string;
  autoSize?: boolean;
};

export function Youtube(props: YoutubeProps) {
  const { videoId, autoSize } = props;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const [frame, setFrame] = useState<HTMLIFrameElement | null>(null);
  const [size, setSize] = useState([650, 390]);
  const time = useYoutubePlaybackTime(frame);

  useEffect(() => {
    invokeEvent('youtube/time', { time, videoId });
  }, [time]);

  useEffect(() => {
    if (!autoSize) {
      return;
    }

    setSize([width, height]);
  }, [autoSize, width, height]);

  async function onReady(r: any) {
    const iframe = await r.target.getIframe();
    setFrame(iframe);
  }

  function onStateChange(change: any) {
    const { data } = change;

    invokeEvent('youtube/state-change', { state: data, videoId, time });
  }

  function onPlaybackRateChange(change: any) {}

  return (
    <Wrapper className='Youtube-wrapper' data-testid='Youtube-wrapper' ref={ref}>
      <YouTubeEmbed
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={size[0]}
        height={size[1]}
        youTubeProps={{
          onReady,
          onStateChange,
          onPlaybackRateChange,
        }}
      />
    </Wrapper>
  );
}

export default Youtube;
