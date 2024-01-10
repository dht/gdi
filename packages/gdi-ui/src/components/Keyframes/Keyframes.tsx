import { Icon, useMeasureOnce } from '@gdi/ui';
import { useRef, useState } from 'react';
import { Icons, Slide, Wrapper } from './Keyframes.style';
import Keyframe from './_parts/Keyframe/Keyframe';
import TimelineCursor from './_parts/TimelineCursor/TimelineCursor';

export type IKeyframe = {
  id: string;
  timestamp: number;
  duration: number;
} & Json;

export type KeyframesProps = {
  iconName: string;
  keyframes: IKeyframe[];
  onKeyframe: (verb: string, itemId: string, data?: Json) => void;
  onIconClick: () => void;
};

export function Keyframes(props: KeyframesProps) {
  const { keyframes, iconName } = props;
  const [ref, { width }] = useMeasureOnce();
  const [isDragging, setIsDragging] = useState(false);
  const refSlide = useRef<any>();

  function onStart() {
    setIsDragging(true);
  }

  function onStop(keyframeId: string, data: IKeyframe) {
    const { percent } = data;
    props.onKeyframe('move', keyframeId, { percent });
    setIsDragging(false);
  }

  function renderKeyframe(keyframe: IKeyframe) {
    return (
      <Keyframe
        key={keyframe.id}
        keyframe={keyframe}
        onStart={onStart}
        onStop={onStop}
        onClick={() => props.onKeyframe('focus', keyframe.id, {})}
        onDelete={() => props.onKeyframe('delete', keyframe.id, {})}
        totalWidth={width - 32}
      />
    );
  }

  function renderKeyframes() {
    return keyframes.map((keyframe: IKeyframe) => renderKeyframe(keyframe));
  }

  function renderCursor() {
    if (isDragging) return null;

    return <TimelineCursor refSlide={refSlide} onKeyframe={props.onKeyframe} />;
  }

  const style: React.CSSProperties = {
    maxWidth: width - 32,
  };

  return (
    <Wrapper ref={ref} className='Keyframes-wrapper' data-testid='Keyframes-wrapper'>
      <Icons onClick={() => props.onIconClick()}>
        <Icon className='icon' name={iconName} />
      </Icons>
      <Slide ref={refSlide} style={style} className='slide'>
        {renderKeyframes()}
        {renderCursor()}
      </Slide>
    </Wrapper>
  );
}

export default Keyframes;
