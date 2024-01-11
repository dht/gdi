import React, { useEffect } from 'react';
import { Wrapper } from './BitLayer.style';
import { Hud, Txt } from 'isokit2';
import { sampleDataHud, sampleDataTxt } from './BitLayer.data';
import { useJsonResource } from './BitLayer.hooks';
import { get } from 'lodash';

export type BitLayerProps = {
  layerId: string;
  attachmentUrl: string;
};

const map: any = {
  hud: Hud,
  txt: Txt,
};

export function BitLayer(props: BitLayerProps) {
  const { layerId, attachmentUrl } = props;
  const json = useJsonResource(attachmentUrl);

  if (!json || layerId !== 'layer') {
    return null;
  }

  function renderInner() {
    const layerType = get(json, 'layerType');
    const Cmp = map[layerType];

    if (!Cmp) {
      return null;
    }

    return <Cmp json={json} />;
  }

  return (
    <Wrapper className='BitLayer-wrapper' data-testid='BitLayer-wrapper'>
      {renderInner()}
    </Wrapper>
  );
}

export default BitLayer;
