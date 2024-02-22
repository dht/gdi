import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { Actions, Player, Wrapper } from './MusicPreview.style';
import { Button } from '@gdi/ui';

export type MusicPreviewProps = {
  item: Json;
};

const options = {
  height: 100,
  waveColor: '#556',
  progressColor: 'pink',
};

export function MusicPreview(props: MusicPreviewProps) {
  const { item } = props;
  const [url, setUrl] = useState('');

  function onPurchase() {
    window.open(item.url, '_blank');
  }

  useEffect(() => {
    const value = get(item, 'previewMp3Url');
    setUrl(value);
  }, [item]);

  return (
    <Wrapper className='MusicPreview-wrapper' data-testid='MusicPreview-wrapper'>
      <Player controls src={url} />
      <Actions>
        <Button inverse onClick={onPurchase}>
          Purchase
        </Button>
      </Actions>
    </Wrapper>
  );
}

export default MusicPreview;
