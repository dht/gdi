import { FsSocketsAdapter } from '../adapters/adapter.sockets';

export let socketsAdapter: FsSocketsAdapter;

export const setSocketsAdapter = (value: any) => {
  socketsAdapter = value;
};
