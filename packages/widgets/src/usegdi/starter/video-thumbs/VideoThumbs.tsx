import { MultiTrack } from '@gdi/ui';
import { Wrapper } from './VideoThumbs.style';

export type VideoThumbsProps = {
  waveTracks: any;
  waveOptions: any;
  callbacks: any;
};

export function VideoThumbs(props: VideoThumbsProps) {
  const { waveTracks, waveOptions } = props;

  return (
    <Wrapper className='VideoThumbs-wrapper' data-testid='VideoThumbs-wrapper'>
      <MultiTrack
        options={waveOptions as any}
        tracks={waveTracks}
        cue={{} as any}
        dotId=''
        onAudio={() => {}}
        onBit={() => {}}
      />
    </Wrapper>
  );
}

export default VideoThumbs;
