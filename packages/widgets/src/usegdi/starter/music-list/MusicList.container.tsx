import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MusicList } from './MusicList';
import { useMount } from 'react-use';
import { useSagas } from '../../../helpers/useSaga';
import { invokeEvent } from 'shared-base';

export type MusicListContainerProps = {};

export function MusicListContainer(_props: MusicListContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const itemsPurchased = useSelector(selectors.music.$purchased);
  const itemsSearch = useSelector(selectors.music.$search);
  const { tabId } = currentIds;

  useSagas(['widgets.musicList']);

  const items = tabId === 'search' ? itemsSearch : itemsPurchased;

  const callbacks = useMemo(
    () => ({
      onChange: (remoteItemId: string) => {
        dispatch(actions.currentIds.patch({ remoteItemId }));
      },
      onTabChange: (tabId: string) => {
        dispatch(actions.currentIds.patch({ tabId }));
      },
      onSearch: (q: string) => {
        if (!q) return;
        invokeEvent('music/search', { q });
      },
    }),
    []
  );

  return <MusicList items={items} tabId={tabId} callbacks={callbacks} />;
}

export default MusicListContainer;
