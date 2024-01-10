import { useDispatch, useSelector } from '@gdi/store-base';
import { actions, selectors } from '@gdi/store-iso';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { DotTimeline } from './DotTimeline';

export type DotTimelineContainerProps = {};

export function DotTimelineContainer(_props: DotTimelineContainerProps) {
  const dispatch = useDispatch();
  const dotsExist = useSelector(selectors.dots.$dotsExist);
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const { virtualDotId, trackId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onTrackClick: (id: string) => {
        dispatch(actions.sceneCurrentIds.patch({ trackId: id }));
      },
      onDotClick: (id: string, tid: string) => {
        invokeEvent('virtualDot/click', {
          virtualDotId: id,
          trackId: tid,
        });
      },
      onDotDoubleClick: (id: string, tid: string) => {
        invokeEvent('virtualDot/dblclick', {
          virtualDotId: id,
          trackId: tid,
        });
      },
      onCopy: (id: string, tid: string) => {
        dispatch({
          type: 'DOT',
          verb: 'copy',
          payload: {
            virtualDotId: id,
            trackId: tid,
          },
        });
      },
      onDelete: (id: string, tid: string) => {
        dispatch({
          type: 'DOT',
          verb: 'delete',
          payload: {
            virtualDotId: id,
            trackId: tid,
          },
        });
      },
      onPaste: (id: string, tid: string) => {
        dispatch({
          type: 'DOT',
          verb: 'paste',
          payload: {
            virtualDotId: id,
            trackId: tid,
          },
        });
      },
    }),
    []
  );

  return (
    <DotTimeline
      dotsExist={dotsExist}
      trackId={trackId}
      virtualDotId={virtualDotId}
      callbacks={callbacks}
    />
  );
}

export default DotTimelineContainer;
