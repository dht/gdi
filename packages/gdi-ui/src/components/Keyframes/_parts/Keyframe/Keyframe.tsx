import classnames from 'classnames';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useKey } from 'react-use';
import { Handler, Wrapper } from './Keyframe.style';

export type KeyframeProps = {
  keyframe: Json;
  onStart: () => void;
  onStop: (id: string, data: any) => void;
  onClick: (keyframeId: string) => void;
  onDelete: () => void;
  totalWidth: number;
};

export function Keyframe(props: KeyframeProps) {
  const { keyframe, totalWidth } = props;
  const { timestampPercent, isSelected } = keyframe;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const className = classnames('Keyframe-wrapper', {
    selected: isSelected,
  });

  const left = timestampPercent * totalWidth;

  const style: React.CSSProperties = {
    left: left + 'px',
  };

  function onClick() {
    props.onClick(keyframe.id);
  }

  function onStart(_ev: any, _pos: any) {
    props.onStart();
  }

  function onDrag(_ev: any, data: any) {
    setPosition({ x: data.x, y: 0 });
  }

  function onStop(_ev: any, data: any) {
    const { x } = data;
    const changePercent = x / totalWidth;
    const percent = timestampPercent + changePercent;
    setPosition({ x: 0, y: 0 });
    props.onStop(keyframe.id, { percent });
  }

  useKey(
    'Delete',
    () => {
      if (!isSelected || !hover) return;
      props.onDelete();
    },
    {},
    [isSelected, hover]
  );

  return (
    <Wrapper
      style={style}
      className={className}
      data-testid='Keyframe-wrapper'
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Draggable axis='x' position={position} onStart={onStart} onDrag={onDrag} onStop={onStop}>
        <Handler />
      </Draggable>
    </Wrapper>
  );
}

export default Keyframe;
