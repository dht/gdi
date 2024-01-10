import { useDispatch, useSelector } from '@gdi/store-base';
import { actions, selectors } from '@gdi/store-iso';
import AudioTimelineContainer from './AudioTimeline.container';
import EffectsTimelineContainer from './EffectsTimeline.container';

export type DynamicTimelineContainerProps = {};

export function DynamicTimelineContainer(_props: DynamicTimelineContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const { dynamicTrackId } = currentIds;

  function onIconClick() {
    const nextId = dynamicTrackId === 'audio' ? 'effects' : 'audio';

    dispatch(
      actions.sceneCurrentIds.patch({
        dynamicTrackId: nextId,
      })
    );
  }

  const Cmp = dynamicTrackId === 'audio' ? AudioTimelineContainer : EffectsTimelineContainer;

  return <Cmp onIconClick={onIconClick} />;
}

export default DynamicTimelineContainer;
