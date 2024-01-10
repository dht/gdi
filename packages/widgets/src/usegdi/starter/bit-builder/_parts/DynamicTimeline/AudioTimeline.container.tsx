import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { Keyframes } from '@gdi/ui';
import { useMemo } from 'react';

export type AudioTimelineContainerProps = {
  onIconClick: () => void;
};

export function AudioTimelineContainer(props: AudioTimelineContainerProps) {
  const dispatch = useDispatch();
  const audios = useSelector(selectors.base.$audios);

  function onKeyframe(verb: string, id: string, data?: Json) {
    dispatch({
      type: 'AUDIO',
      verb: verb + 'Audio',
      id,
      payload: data,
    });
  }

  return (
    <Keyframes
      iconName='mic'
      keyframes={audios}
      onKeyframe={onKeyframe}
      onIconClick={props.onIconClick}
    />
  );
}

export default AudioTimelineContainer;
