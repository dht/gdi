import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MuxOverlay } from './MuxOverlay';

export type MuxOverlayContainerProps = {};

export function MuxOverlayContainer(_props: MuxOverlayContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return (
    <Routes>
      <Route path='/boards/*' element={<MuxOverlay />} />
    </Routes>
  );
}

export default MuxOverlayContainer;
