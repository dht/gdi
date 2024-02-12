import classnames from 'classnames';
import { Hud, Txt } from 'isokit2';
import { get } from 'lodash';
import { useJsonResource } from './BitLayer.hooks';
import { Wrapper } from './BitLayer.style';

export type BitLayerProps = {
  layerId: string;
  attachmentUrl: string;
  absolute?: boolean;
};

const map: any = {
  hud: Hud,
  txt: Txt,
};

export function BitLayer(props: BitLayerProps) {
  const { layerId, attachmentUrl, absolute } = props;
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

    return <Cmp json={json} absolute={absolute} />;
  }

  const className = classnames('BitLayer-wrapper', {
    absolute,
  });

  return (
    <Wrapper className={className} data-testid='BitLayer-wrapper'>
      {renderInner()}
    </Wrapper>
  );
}

export default BitLayer;
