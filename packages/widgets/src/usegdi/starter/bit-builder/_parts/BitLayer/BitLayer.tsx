import React from 'react';
import { Wrapper } from './BitLayer.style';
import { Hud, Txt } from 'isokit2';
import { sampleData } from './BitLayer.data';

export type BitLayerProps = {};

export function BitLayer(props: BitLayerProps) {
  return (
    <Wrapper className='BitLayer-wrapper' data-testid='BitLayer-wrapper'>
      <Hud config={sampleData.config} items={sampleData.items} timeline={sampleData.timeline} />
      <Txt />
    </Wrapper>
  );
}

export default BitLayer;
