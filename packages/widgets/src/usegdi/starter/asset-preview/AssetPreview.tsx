import React from 'react';
import { Close, Wrapper } from './AssetPreview.style';
import { ModelViewer } from 'isokit2';
import { SoundPlayer, ImageViewer, JsonViewer, TextViewer, Icon, EditorCode } from '@gdi/ui';
import { IAsset } from '@gdi/store-base';

export type AssetPreviewProps = {
  asset: IAsset;
  callbacks?: {
    onClose: () => void;
  };
};

export function AssetPreview(props: AssetPreviewProps) {
  const { asset, callbacks } = props;

  function renderSoundPlayer() {
    const { assetUrl } = asset;

    const options = {
      height: 100,
      waveColor: '#556',
      progressColor: 'pink',
    };

    return <SoundPlayer id='preview' url={assetUrl} options={options} onReady={() => {}} />;
  }

  function renderModelViewer() {
    const { assetUrl } = asset;
    return <ModelViewer url={assetUrl} />;
  }

  function renderImageViewer() {
    const { assetUrl } = asset;
    return <ImageViewer imageUrl={assetUrl} />;
  }

  function renderTextViewer() {
    const { assetUrl } = asset;
    return <TextViewer url={assetUrl} />;
  }

  function renderJsonViewer() {
    const { assetUrl } = asset;
    return <JsonViewer url={assetUrl} />;
  }

  function renderInner() {
    if (!asset) return null;

    switch (asset.contentType) {
      case 'audio':
        return renderSoundPlayer();
      case '3d':
        return renderModelViewer();
      case 'image':
        return renderImageViewer();
      case 'txt':
        return renderTextViewer();
      case 'clip':
      case 'scene':
      case 'json':
        return renderJsonViewer();
    }
  }

  function renderCloseIcon() {
    if (!callbacks?.onClose) return null;

    return (
      <Close onClick={callbacks.onClose}>
        <Icon name='close' size={20} />
      </Close>
    );
  }

  return (
    <Wrapper className='AssetPreview-wrapper' data-testid='AssetPreview-wrapper'>
      {renderInner()}
      {renderCloseIcon()}
    </Wrapper>
  );
}

export default AssetPreview;
