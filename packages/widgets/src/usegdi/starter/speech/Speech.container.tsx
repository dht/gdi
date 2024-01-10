import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useCustomEvent } from '@gdi/ui';
import { useMemo, useState } from 'react';
import { useSaga } from '../../../helpers/useSaga';
import VoiceGalleryContainer from '../voice-gallery/VoiceGallery.container';
import { Speech } from './Speech';

export type SpeechContainerProps = {};

export function SpeechContainer(_props: SpeechContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { voiceId } = currentIds;

  const [value, setValue] = useState('');

  useSaga('widgets.speech');

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
      onSave: () => {
        console.log('onSave');
      },
      onChange: (ev: any) => {
        setValue(ev.target.value);
      },
      onGenerate: () => {
        dispatch({
          type: 'PROMPT',
          prompt: value,
        });
      },
    }),
    [value]
  );

  useCustomEvent(
    'selection/change',
    (ev: any) => {
      const { selection } = ev;
      setValue(selection);
    },
    []
  );

  return (
    <Speech value={value} voiceUrl={appState.voiceUrl} callbacks={callbacks}>
      <VoiceGalleryContainer />
    </Speech>
  );
}

export default SpeechContainer;
