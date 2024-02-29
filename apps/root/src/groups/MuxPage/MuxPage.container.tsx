import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxPage } from './MuxPage';
import { useMount } from 'react-use';
import { actions } from '@gdi/store-base';

export type MuxPageContainerProps = {};

export function MuxPageContainer(_props: MuxPageContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const tabs = useSelector(selectors.mux.$muxTabs);
  const { muxTabId } = currentIds;

  useMount(() => {
    dispatch(actions.currentIds.patch({ muxTabId: 'home' }));
  });

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <MuxPage tabs={tabs} tabId={muxTabId} />;
}

export default MuxPageContainer;
