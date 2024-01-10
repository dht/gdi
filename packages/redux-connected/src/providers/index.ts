import { handleAction as bridge } from '../providers/provider.bridge';
import { handleAction as cli } from '../providers/provider.cli';
import { handleAction as direct } from '../providers/provider.direct';
import { handleAction as fireStore } from '../providers/provider.fireStore';
import { handleAction as json } from './provider.static';
import { handleAction as localStorage } from '../providers/provider.localStorage';
import { handleAction as rest } from '../providers/provider.rest';
import { config } from '../store/store';
import { get } from 'lodash';

export const allProviders: any = {
  bridge,
  cli,
  direct,
  fireStore,
  json,
  localStorage,
  none: localStorage,
  rest,
};

export const getProvider = () => {
  const providerType = get(config, 'adapter.providerType', 'none');
  return allProviders[providerType];
};
