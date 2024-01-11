import React, { useEffect } from 'react';
import { Wrapper } from './BitLayer.style';
import { Hud, Txt } from 'isokit2';
import { sampleDataHud, sampleDataTxt } from './BitLayer.data';
import { useJsonResource } from './BitLayer.hooks';

export type BitLayerProps = {
  layerId: string;
  attachmentUrl: string;
};

export function BitLayer(props: BitLayerProps) {
  const { layerId, attachmentUrl } = props;
  const json = useJsonResource(attachmentUrl);

  function renderHud() {
    if (layerId !== 'layer' || !json) return null;

    return <Hud hud={sampleDataHud} />;
  }

  function renderTxt() {
    if (layerId !== 'txt') return null;

    return <Txt txt={sampleDataTxt} />;
  }

  return (
    <Wrapper className='BitLayer-wrapper' data-testid='BitLayer-wrapper'>
      {renderHud()}
      {renderTxt()}
    </Wrapper>
  );
}

export default BitLayer;
