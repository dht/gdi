import React from 'react';
import { Wrapper } from './VoiceGallery.style';
import VoiceGallery from './VoiceGallery';
import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { playSound } from '@gdi/ui';

export type VoiceGalleryContainerProps = {};

export function VoiceGalleryContainer(_props: VoiceGalleryContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const voices = useSelector(selectors.base.$voices);
  const currentVoiceId = currentIds.voiceId;

  const onVoiceClick = (voice: VoiceItem) => {
    const { audioUrl } = voice;

    dispatch(
      actions.currentIds.patch({
        voiceId: voice.id,
      })
    );

    if (audioUrl) {
      playSound(audioUrl);
    }
  };

  return (
    <VoiceGallery items={voices} currentVoiceId={currentVoiceId} onVoiceClick={onVoiceClick} />
  );
}

export default VoiceGalleryContainer;
