import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxGroup } from './MuxGroup';
import { useMount } from 'react-use';
import { actions } from '@gdi/store-base';

export type MuxGroupContainerProps = {};

export function MuxGroupContainer(_props: MuxGroupContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const tabs = useSelector(selectors.mux.$muxTabs);
  const { muxTabId } = currentIds;

  useMount(() => {
    if (muxTabId) return;
    dispatch(actions.currentIds.patch({ muxTabId: 'home' }));
  });

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <MuxGroup tabs={tabs} tabId={muxTabId} />;
}

export default MuxGroupContainer;
