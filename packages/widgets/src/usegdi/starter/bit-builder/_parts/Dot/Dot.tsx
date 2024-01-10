import React, { useState } from 'react';
import { Wrapper } from './Dot.style';
import classnames from 'classnames';
import { useKey } from 'react-use';

export type DotProps = {
  trackId: string;
  dotId: string;
  focused?: boolean;
  dotExists?: boolean;
  onClick: (dotId: string, trackId: string) => void;
  onDoubleClick: (dotId: string, trackId: string) => void;
  onDelete: (dotId: string, trackId: string) => void;
  onCopy: (dotId: string, trackId: string) => void;
  onPaste: (dotId: string, trackId: string) => void;
};

export function Dot(props: DotProps) {
  const { trackId, dotId, focused, dotExists } = props;
  const [hover, setHover] = useState(false);

  const className = classnames('Dot-wrapper', {
    focused: focused,
    exists: dotExists,
    hover: hover,
  });

  useKey(
    'c',
    (ev) => {
      if (!focused || !ev.metaKey || !hover) return;

      ev.stopPropagation();

      props.onCopy(dotId, trackId);
    },
    {},
    [focused, hover]
  );

  useKey(
    'v',
    (ev) => {
      if (!focused || !ev.metaKey || !hover) return;

      ev.stopPropagation();

      props.onPaste(dotId, trackId);
    },
    {},
    [focused, hover]
  );

  useKey(
    'Delete',
    (ev) => {
      if (!focused || !dotExists || !hover) return;

      ev.stopPropagation();

      props.onDelete(dotId, trackId);
    },
    {},
    [focused, dotExists, hover]
  );

  function onClick() {
    props.onClick(dotId, trackId);
  }

  function onDoubleClick() {
    props.onDoubleClick(dotId, trackId);
  }

  return (
    <Wrapper
      className={className}
      data-testid='Dot-wrapper'
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    ></Wrapper>
  );
}

export default Dot;
