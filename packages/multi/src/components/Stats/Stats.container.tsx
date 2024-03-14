import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Stats } from './Stats';

export type StatsContainerProps = {
  data: any;
};

export function StatsContainer(props: StatsContainerProps) {
  const { data } = props;
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const stats = {
    total: data.length,
  };

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <Stats stats={stats} />;
}

export default StatsContainer;
