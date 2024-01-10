import React, { useRef, useState } from 'react';
import { Handler, Wrapper } from './BitTimelineItem.style';
import Draggable from 'react-draggable';
import classnames from 'classnames';
import { useKey, useUnmount } from 'react-use';
import { set } from 'shared-base';

export type BitTimelineItemProps = {
  bit: Json;
  isSelected: boolean;
  onStop: (id: string, data: any) => void;
  onClick: () => void;
  onDelete: () => void;
  totalWidth: number;
};

export function BitTimelineItem(props: BitTimelineItemProps) {
  const { bit, isSelected, totalWidth } = props;
  const { timestampPercent, durationPercent } = bit;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enableClick, setEnableClick] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const timeout = useRef<any>();

  const className = classnames('BitTimelineItem-wrapper', {
    selected: isSelected,
    hover: isHover,
  });

  const left = timestampPercent * totalWidth;

  const style: React.CSSProperties = {
    minWidth: durationPercent * totalWidth + 'px',
    left: left + 'px',
  };

  function onClick() {
    if (!enableClick) return;
    props.onClick();
  }

  function onStart(_ev: any, pos: any) {
    setEnableClick(false);
  }

  function onDrag(_ev: any, data: any) {
    setPosition({ x: data.x, y: 0 });
  }

  function onStop(_ev: any, data: any) {
    setPosition({ x: 0, y: 0 });
    props.onStop(bit.id, data);

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setEnableClick(true);
    }, 100);
  }

  useUnmount(() => {
    clearTimeout(timeout.current);
  });

  useKey(
    'Delete',
    () => {
      if (!isSelected || !isHover) {
        return;
      }

      props.onDelete();
    },
    {},
    [isHover, isSelected]
  );

  return (
    <Wrapper
      style={style}
      className={className}
      data-testid='BitTimelineItem-wrapper'
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Draggable axis='x' position={position} onStart={onStart} onDrag={onDrag} onStop={onStop}>
        <Handler />
      </Draggable>
    </Wrapper>
  );
}

export default BitTimelineItem;
