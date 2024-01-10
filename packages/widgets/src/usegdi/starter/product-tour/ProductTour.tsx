import React, { useMemo } from 'react';
import { Wrapper } from './ProductTour.style';
import { IHudConfig, IHudItem, IHudTimeline, ModelViewer, Scene } from 'isokit2';
import { useMeasure } from 'react-use';

export type ProductTourProps = {
  board: IBoardConfig;
  hud: {
    config: IHudConfig;
    items: IHudItem[];
    timeline: IHudTimeline;
  };
  onBoardLoaded: (scene: Scene, debugBabylon: boolean) => void;
};

export function ProductTour(props: ProductTourProps) {
  const { board, hud } = props;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  const config = useMemo(
    () => ({
      ...hud.config,
      width: width - 50,
      height: height - 50,
    }),
    [width, height]
  );

  function renderInner() {
    if (!config || !width) {
      return null;
    }

    return (
      <ModelViewer
        config={config}
        items={hud.items}
        timeline={hud.timeline}
        board={board}
        onBoardLoaded={props.onBoardLoaded}
      />
    );
  }

  return (
    <Wrapper className='ProductTour-wrapper' data-testid='ProductTour-wrapper' ref={ref}>
      {renderInner()}
    </Wrapper>
  );
}

export default ProductTour;
