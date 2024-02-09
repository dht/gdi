import { IGdiStore } from '@gdi/store-base';
import { get, pickBy } from 'lodash';
import { IHashInfo, Json } from '../types';

export function shortId(id: string) {
  return (id.split('.').pop() ?? '').toLowerCase();
}

export const checkIsBoardPage = () => {
  return window.location.pathname.startsWith('/boards');
};

export const prepareBoardData = (state: IGdiStore, storeNodes: string[]) => {
  const output: Json = {};

  const { appState, board } = state;
  const { tags } = appState;
  const boardIdentifier = get(board, 'identifier');

  const projectTag = tags.find((i) => i.startsWith('project-'));

  for (let node of storeNodes) {
    output[node] = (state as any)[node];
  }

  if (!projectTag) {
    delete output['assets'];
  }

  const isAssetsManager = boardIdentifier === 'com.usegdi.asset-manager';

  if (!isAssetsManager) {
    // filter assets by project tag
    output.assets = pickBy(output.assets, (asset: any) => {
      return asset.tags.includes(projectTag);
    });
  }

  return output;
};

export const parseHash = (hash: string): IHashInfo => {
  const output: IHashInfo = {
    hash,
    boardDbPath: '',
    dbType: 'none',
  };

  const boardDbPath = hash.replace(/^#/, '');

  if (!boardDbPath) {
    return output;
  }

  output.boardDbPath = boardDbPath;
  output.dbType = boardDbPath.includes('/static/') ? 'static' : 'dynamic';

  return output;
};
