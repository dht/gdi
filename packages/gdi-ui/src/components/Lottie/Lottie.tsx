import { Wrapper } from './Lottie.style';
import * as LottiePlayer from '@lottiefiles/lottie-player';

export type LottieProps = {
  url: string;
  size: number;
  loop?: boolean;
  autoplay?: boolean;
};

export function Lottie(props: LottieProps) {
  const { url, size = 300, loop, autoplay = true } = props;

  const Cmp = LottiePlayer;

  const style: React.CSSProperties = {
    width: size + 'px',
    height: size + 'px',
  };

  return (
    <Wrapper className='Lottie-wrapper' data-testid='Lottie-wrapper' style={style}>
      <lottie-player autoplay={autoplay} loop={loop} mode='normal' src={url} />
    </Wrapper>
  );
}

export default Lottie;
