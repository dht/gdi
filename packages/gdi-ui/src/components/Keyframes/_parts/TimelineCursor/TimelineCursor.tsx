import { useCursor } from './TimelineCursor.hooks';
import { Wrapper } from './TimelineCursor.style';

export type TimelineCursorProps = {
  refSlide: any;
  onKeyframe: (verb: string, keyframeId: string, data?: Json) => void;
};

export function TimelineCursor(props: TimelineCursorProps) {
  const { refSlide } = props;

  const cursorStyle = useCursor(refSlide, (percent) => {
    props.onKeyframe('add', '', { percent });
  });

  return (
    <Wrapper
      className='TimelineCursor-wrapper'
      style={cursorStyle}
      data-testid='TimelineCursor-wrapper'
    ></Wrapper>
  );
}

export default TimelineCursor;
