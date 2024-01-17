import { IVoice, actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { stopAllSounds, playSound } from '@gdi/ui';
import VoiceGallery from './VoiceGallery';
import { useState } from 'react';

export type VoiceGalleryContainerProps = {};

export function VoiceGalleryContainer(_props: VoiceGalleryContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const voices = useSelector(selectors.base.$voices);
  const currentVoiceId = currentIds.voiceId;
  const [lastVoiceId, setLastVoiceId] = useState<string>('');

  const onVoiceClick = (voice: IVoice) => {
    const { id, audioUrl } = voice;

    let nextVoiceId = id;

    if (lastVoiceId === id) {
      nextVoiceId = '';
    }

    dispatch(
      actions.currentIds.patch({
        voiceId: voice.id,
      })
    );

    if (audioUrl) {
      stopAllSounds();
      playSound(audioUrl);
    }
  };

  return (
    <VoiceGallery items={voices} currentVoiceId={currentVoiceId} onVoiceClick={onVoiceClick} />
  );
}

export default VoiceGalleryContainer;
