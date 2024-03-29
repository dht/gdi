import { actions, IBoard, IExample } from '@gdi/store-base';
import { actions as actionsIso, nodeNames as nodeNamesIso } from '@gdi/store-iso';
import axios, { AxiosInstance } from 'axios';
import { get, merge, set } from 'lodash';
import { delay, invokeEvent } from 'shared-base';
import { Json } from '../types';
import { l } from '../utils/logs';
import { arrayToObject } from '../utils/object';
import { IBoardAdapter, IBoardAdapterConfig } from './adapter.types';

export class BoardAdapter implements IBoardAdapter {
  private instance: AxiosInstance;
  private boardId: string = '';
  private board: IBoard = {} as IBoard;
  private example: IExample | null = null;
  private boardDbPath: string = '';

  constructor(public config: IBoardAdapterConfig, private store: any) {
    this.instance = axios.create({
      baseURL: config.baseUrl,
    });
  }

  dispatch(action: any) {
    this.store.dispatch(action);
  }

  fetchResource(path: string) {
    return this.instance.get(path).then((response) => {
      return response.data;
    });
  }

  fetchBoard() {
    const boardId = this.boardId;

    const filePath = `/${boardId.toUpperCase()}/${boardId.toUpperCase()}.json`;

    return this.fetchResource(filePath);
  }

  getBoard() {
    return this.board;
  }

  async fetchRemoteDb(dbPath: string) {
    const output = { db: {} } as any;

    if (!dbPath) {
      return output;
    }

    output.db = await this.fetchResource(dbPath);
    return output;
  }

  async fetchElementRemoteProps(allElements: any, output: any) {
    // elements props
    for (let resolution of Object.keys(allElements)) {
      const elements = allElements[resolution as keyof typeof allElements];

      let element: any;

      for (element of Object.values(elements ?? {})) {
        const { widgetId, props = {} } = element;

        for (let propKey of Object.keys(props ?? {})) {
          if (propKey.match(/Url$/)) {
            const propValue = props[propKey as keyof typeof props];

            if (!propValue) {
              continue;
            }
            const response = await this.fetchResource(propValue);
            const newProp = propKey.replace(/Url$/, '');
            l({message: `- fetching [${newProp}] from url | ${widgetId}`, verb: 'board', data: { url: propValue, data: response }}); // prettier-ignore
            set(output, `elements.${resolution}.${element.id}.props.${newProp}`, response);
          }
        }
      }
    }
  }

  async prepareBoard(board: IBoard, isGuest?: boolean) {
    let output = {
      board: { ...board },
      db: {},
    } as any;

    const { elements: allElements } = board;

    l({ message: 'Fetching external resources', verb: 'board' }); // prettier-ignore

    for (let resourceId of ['flow', 'examples']) {
      const key = `${resourceId}Url`;
      const url = (board as any)[key];

      if (!url) {
        continue;
      }

      const response = await this.fetchResource(url);

      l({message: `- Fetching [${resourceId}] from url`,verb: 'board', data: { url, data: response }}); // prettier-ignore
      output.board[resourceId] = response;
    }

    const flow = get(output, 'board.flow', {});
    merge(output.db, flow);

    const exampleId = get(output, 'board.defaults.exampleId', '');
    const setupId = get(output, 'board.defaults.setupId', '');

    if (isGuest || setupId) {
      this.example = get(output, `board.examples.${exampleId}`);
    }

    if (this.example) {
      const { dbPath } = this.example;
      this.boardDbPath = dbPath;
    }

    if (this.boardDbPath) {
      const remoteDb = await this.fetchRemoteDb(this.boardDbPath);
      merge(output.db, remoteDb.db);
      this.dispatch(actions.appState.patch({ source: 'static' }));
    }

    await this.fetchElementRemoteProps(allElements, output.board);

    l({ message: `${board.id} ready`, verb: 'board', data: { board: output } });

    return output;
  }

  async seedDb(db: Json) {
    for (let nodeName of Object.keys(db)) {
      let value = db[nodeName];

      if (Array.isArray(value)) {
        value = arrayToObject(value);
      }

      const action = get(actions, [nodeName, 'setAll'], null);

      if (action) {
        this.dispatch(action(value));
      }
    }
  }

  clearBoard() {
    this.example = null;
    this.boardDbPath = '';

    this.dispatch(actions.board.patch({ elements: { default: {} }})); // prettier-ignore
    this.dispatch(actions.transcriptLines.setAll({}));
    this.dispatch(actions.transcriptAudios.setAll({}));
    this.dispatch(actionsIso.sceneAssetLoader.patch({ isLoading: true }));
    this.dispatch(
      actions.appState.patch({
        flavourColumnIndex: 0,
        promptParams: {},
        source: 'none',
        tabId: '',
      })
    );

    nodeNamesIso.forEach((nodeName: string) => {
      const action = get(actionsIso, [nodeName, 'setAll'], null);

      if (action) {
        this.dispatch(action({}));
      }
    });
  }

  loadBoard = async (action: Json) => {
    const { boardId, itemId, boardDbPath, autoPlay, isGuest } = action;

    const flavour = itemId ? 'item' : 'default';
    const flavourColumnIndex = itemId ? 1 : 0;

    this.clearBoard();

    this.boardId = boardId;
    this.boardDbPath = boardDbPath;

    l({
      message: `Loading board "${boardId}" (${boardDbPath})`,
      verb: 'bootstrap',
      data: { boardId, boardDbPath, autoPlay },
    });

    try {
      const board = await this.fetchBoard();
      const boardAndDb = await this.prepareBoard(board, isGuest);

      await this.seedDb(boardAndDb.db);
      this.dispatch(actions.appState.patch({ flavour, flavourColumnIndex }));
      this.dispatch(actions.board.setAll(boardAndDb.board));
      this.board = boardAndDb.board;

      await delay(100);

      this.dispatch({ type: 'BOARD_LOAD_DONE' });
      this.dispatch(actions.appState.patch({ isDataReady: true }));
    } catch (err) {
      console.log('err =>', err);
    }

    return this.board as IBoard;
  };
}
