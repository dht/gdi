import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxPage } from './MuxPage';
import { useMount } from 'react-use';
import { actions } from '@gdi/store-base';

export type MuxPageContainerProps = {};

export function MuxPageContainer(_props: MuxPageContainerProps) {
  const dispatch = useDispatch();
  const tab = useSelector(selectors.base.$muxTab);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const tabs = useSelector(selectors.base.$muxTabs);
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

  return <MuxPage tab={tab} tabId={muxTabId} />;
}

export default MuxPageContainer;
