import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxPage } from './MuxPage';

export type MuxPageContainerProps = {};

export function MuxPageContainer(_props: MuxPageContainerProps) {
  const dispatch = useDispatch();
  const tab = useSelector(selectors.base.$muxTab);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const tabs = useSelector(selectors.base.$muxTabs);
  const { muxTabId } = currentIds;

  console.log('muxTabId2 ->', muxTabId);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <MuxPage tab={tab} tabId={muxTabId} />;
}

export default MuxPageContainer;
