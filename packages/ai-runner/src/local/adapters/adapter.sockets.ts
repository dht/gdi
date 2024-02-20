import { guid4 } from 'shared-base';
import { SocketsAdapter } from '../types';
import { unScopePath } from '../utils/xpath';

type Listener = {
  docPath: string;
  path: string;
};

type Listeners = Record<string, Listener>;

export class FsSocketsAdapter implements SocketsAdapter {
  private listeners: Listeners = {};
  private sockets: any[] = [];

  constructor(private io: any) {
    this.io.on('connection', (socket: any) => {
      this.sockets.push(socket);

      console.log('a user connected');

      socket.on('addListener', (data: any) => {
        const { docPath } = data;

        this.addListener(docPath);
      });

      // removeListener is a reserved socket.io event
      socket.on('rmListener', (data: any) => {
        const { docPath } = data;
        this.removeListener(docPath);
      });

      socket.on('disconnect', () => {
        this.sockets = this.sockets.filter((s) => s !== socket);
        console.log('user disconnected');
      });
    });
  }

  addListener = (docPath: string) => {
    const unscoped = unScopePath(docPath);
    const { path } = unscoped;

    this.listeners[path] = {
      docPath,
      path,
    };
  };

  invokeListeners = (path: string, data: any) => {
    const match = this.listeners[path];

    if (!match) {
      return;
    }

    const { docPath } = match;

    this.sendMessageToAll('data/change', {
      docPath,
      path,
      data,
    });
  };

  removeListener = (docPath: string) => {
    const unscoped = unScopePath(docPath);
    const { path } = unscoped;

    delete this.listeners[path];
  };

  sendMessageToAll = (eventId: string, data: Json) => {
    this.sockets.forEach((socket) => {
      socket.emit(eventId, data);
    });
  };
}
