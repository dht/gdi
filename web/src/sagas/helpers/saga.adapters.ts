import { actions } from '@gdi/store-base';
import { put } from 'saga-ts';
import { config } from '../../adapters.config';
import { allAdapters } from '../../adapters/index';
import { getStore, setBoardAdapter, setFlowAdapter } from '../../utils/globals';
import { l } from '../../utils/logs';

export function* bootstrapAdapters() {
  const { boardAdapter, flowAdapter } = config as any;

  yield put(actions.adapters.setAll(config));

  // makes sure the store was initialized

  const store = getStore();

  l({ message: 'Bootstrapping BoardAdapter', verb: 'adapters', data: { boardAdapter } });
  const adapterBoard = new allAdapters.BoardAdapter(boardAdapter, store);
  setBoardAdapter(adapterBoard);

  l({ message: 'Bootstrapping FlowAdapter', verb: 'adapters', data: { flowAdapter } });
  const adapterFlow = new allAdapters.FlowAdapter(flowAdapter, store);
  setFlowAdapter(adapterFlow);
}
