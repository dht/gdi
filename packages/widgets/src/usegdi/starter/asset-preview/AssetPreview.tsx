import React, { useEffect, useState } from 'react';
import { Close, Content, Meta, Wrapper } from './AssetPreview.style';
import { ModelViewer } from 'isokit2';
import { SoundPlayer, ImageViewer, JsonViewer, TextViewer, Icon, EditorCode } from '@gdi/ui';
import { IAsset } from '@gdi/store-base';
import { CostAndDuration } from '@gdi/ui';
import { useMeta } from './AssetPreview.hooks';

export type AssetPreviewProps = {
  asset: IAsset;
  callbacks?: {
    onClose: () => void;
  };
};

export function AssetPreview(props: AssetPreviewProps) {
  const { asset, callbacks } = props;
  const { assetUrl } = asset ?? {};
  const meta = useMeta(assetUrl);

  function renderSoundPlayer() {
    const { assetUrl } = asset;

    const options = {
      height: 100,
      waveColor: '#556',
      progressColor: 'pink',
    };

    return (
      <Content>
        <SoundPlayer id='preview' url={assetUrl} options={options} onReady={() => {}} />;
      </Content>
    );
  }

  function renderModelViewer() {
    return <ModelViewer url={assetUrl} />;
  }

  function renderImageViewer() {
    return <ImageViewer imageUrl={assetUrl} />;
  }

  function renderTextViewer() {
    return <TextViewer url={assetUrl} />;
  }

  function renderJsonViewer() {
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

  function renderMeta() {
    return (
      <>
        <CostAndDuration value={meta} />
        <Meta>
          <JsonViewer simple value={meta} />
        </Meta>
      </>
    );
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
      {renderMeta()}
      {renderCloseIcon()}
    </Wrapper>
  );
}

export default AssetPreview;
