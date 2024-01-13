import { guid4 } from 'shared-base';
import { SocketsAdapter } from '../types';

export class FsSocketsAdapter implements SocketsAdapter {
  private paths: string[] = [];
  private sockets: any[] = [];

  constructor(private io: any) {
    this.io.on('connection', (socket: any) => {
      this.sockets.push(socket);

      console.log('a user connected');

      socket.on('addListener', (data: any) => {
        const { path } = data;
        this.addListener(path);
      });
      socket.on('disconnect', () => {
        this.sockets = this.sockets.filter((s) => s !== socket);
        console.log('user disconnected');
      });
    });
  }

  addListener = (path: string) => {
    this.paths.push(path);
  };

  invokeListeners = (path: string, data: any) => {
    const match = this.paths.find((p) => path.startsWith(p));

    if (!match) {
      return;
    }

    this.sockets.forEach((socket) => {
      socket.emit('data/change', { path, data });
    });
  };

  removeListener = (path: string) => {
    this.paths = this.paths.filter((p) => p !== path);
  };
}
