import { guid4 } from 'shared-base';
import { SocketsAdapter } from '../../types';

export class FsSocketsAdapter implements SocketsAdapter {
  private listeners: any[] = [];

  constructor(private io: any) {
    this.io.on('connection', (socket: any) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }

  addListener(path: string, callback: any) {
    const id = guid4();
    this.listeners.push({ id, path, callback });

    return () => this.removeListener(id);
  }

  invokeListeners(path: string, data: any) {
    this.listeners
      .filter((l) => l.path === path)
      .forEach((l) => l.callback(data));
  }

  removeListener(id: string) {
    const index = this.listeners.findIndex((l) => l.id === id);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}
