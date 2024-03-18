import { Wrapper } from './YoutubePlayer.style';

export type YoutubePlayerProps = {
  youtubeId: string;
};

export function YoutubePlayer(props: YoutubePlayerProps) {
  const { youtubeId } = props;

  const videoUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <Wrapper className='YoutubePlayer-wrapper' data-testid='YoutubePlayer-wrapper'>
      <iframe
        width='100%'
        height={500}
        src={videoUrl}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
}

export default YoutubePlayer;
