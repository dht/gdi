import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { Keyframes } from '@gdi/ui';

export type EffectsTimelineContainerProps = {
  onIconClick: () => void;
};

export function EffectsTimelineContainer(props: EffectsTimelineContainerProps) {
  const dispatch = useDispatch();
  const effects = useSelector(selectors.base.$effects);

  function onKeyframe(verb: string, id: string, data?: Json) {
    dispatch({
      type: 'EFFECT',
      verb: verb + 'Effect',
      id,
      payload: data,
    });
  }

  return (
    <Keyframes
      iconName='blur_on'
      keyframes={effects}
      onKeyframe={onKeyframe}
      onIconClick={props.onIconClick}
    />
  );
}

export default EffectsTimelineContainer;
