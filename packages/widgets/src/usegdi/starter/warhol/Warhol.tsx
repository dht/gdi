import React, { useContext } from 'react';
import { Boxes, Wrapper } from './Warhol.style';
import WarholBox from './_parts/WarholBox/WarholBox';
import { useMeasure } from 'react-use';
import { WarholContext, WarholContextProvider } from './Warhol.context';

export type WarholProps = {
  root: string;
  frames: Json[];
};

export function WarholInner(props: WarholProps) {
  const { data } = useContext(WarholContext);
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  const size = Math.min(width, height);

  const style: React.CSSProperties = {
    width: size + 'px',
    height: size + 'px',
  };

  function renderFrame(frame: Json) {
    return <WarholBox key={frame.id} size={size / 2} frame={frame} />;
  }

  function renderFrames() {
    return data.map((frame: Json) => renderFrame(frame));
  }

  return (
    <Wrapper className='Warhol-wrapper' data-testid='Warhol-wrapper' ref={ref}>
      <Boxes style={style}>{renderFrames()}</Boxes>
    </Wrapper>
  );
}

export function Warhol(props: WarholProps) {
  return (
    <WarholContextProvider {...props}>
      <WarholInner {...props} />
    </WarholContextProvider>
  );
}

export default Warhol;
