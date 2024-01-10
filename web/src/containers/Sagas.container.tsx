import { IBarItem, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { SagaLog } from '@gdi/ui';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addListener } from 'shared-base';

export type SagasContainerProps = {};

export function SagasContainer(_props: SagasContainerProps) {
  const dispatch = useDispatch();
  const sagas = useSelector(selectors.base.$sagas);

  return <SagaLog sagas={sagas} />;
}

export default SagasContainer;
