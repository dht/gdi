import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Blank } from './Blank';

export type BlankContainerProps = {
  showBigWip?: boolean;
};

export function BlankContainer(props: BlankContainerProps) {
  const { showBigWip } = props;
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <Blank showBigWip={showBigWip} />;
}

export default BlankContainer;
