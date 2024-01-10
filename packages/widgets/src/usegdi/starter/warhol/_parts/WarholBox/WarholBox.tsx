import React from 'react';
import { Wrapper } from './WarholBox.style';
import classnames from 'classnames';
import WarholMouth from '../WarholMouth/WarholMouth';

export type WarholBoxProps = {
  frame: Json;
  size: number;
};

export function WarholBox(props: WarholBoxProps) {
  const { frame, size } = props;
  const { imageUrl, frameIndex, mouthPosition, mouthFilter } = frame;

  const style: React.CSSProperties = {
    width: size + 'px',
    height: size + 'px',
    backgroundImage: `url(${imageUrl})`,
  };

  const className = classnames('WarholBox-wrapper', `frame-${frameIndex}`, {});

  return (
    <Wrapper style={style} className={className} data-testid='WarholBox-wrapper'>
      <WarholMouth shape={'neutral'} position={mouthPosition} filter={mouthFilter} />
    </Wrapper>
  );
}

export default WarholBox;
