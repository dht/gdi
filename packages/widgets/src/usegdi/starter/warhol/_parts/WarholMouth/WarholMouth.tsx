import React, { useContext } from 'react';
import { Wrapper } from './WarholMouth.style';
import classnames from 'classnames';
import { WarholContext } from '../../Warhol.context';

export type MouthShape =
  | 'neutral'
  | 'a'
  | 'aei'
  | 'cdnstxyz'
  | 'ee'
  | 'chjsh'
  | 'fv'
  | 'gk'
  | 'fv'
  | 'ln'
  | 'l'
  | 'o'
  | 'qw'
  | 'th'
  | 'u'
  | 'mbp'
  | 'o'
  | 'ts'
  | 'uq'
  | 'wr';

export type WarholMouthProps = {
  shape: MouthShape;
  position: {
    top: string;
    left: string;
  };
  filter: string;
  setIndex?: number;
};

export function WarholMouth(props: WarholMouthProps) {
  const { shape = 'mbp', position, filter, setIndex = 2 } = props;
  const { state } = useContext(WarholContext);
  const { root } = state;

  const style: React.CSSProperties = {
    top: position.top,
    left: position.left,
    filter,
  };

  const className = classnames('WarholMouth-wrapper', shape, `set-${setIndex}`, {});

  return (
    <Wrapper
      $root={root}
      className={className}
      style={style}
      data-testid='WarholMouth-wrapper'
    ></Wrapper>
  );
}

export default WarholMouth;
