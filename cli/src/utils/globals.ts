import { FsSocketsAdapter } from '../commands/start/start.adapters.sockets';

export let socketsAdapter: FsSocketsAdapter;

export const setSocketsAdapter = (value: any) => {
  socketsAdapter = value;
};
