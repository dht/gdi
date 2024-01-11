import { eventChannel } from 'redux-saga';
import { initSocketServer } from '../sockets';

export function createSocketsChannel(socketsUrl: string, eventName: string) {
  const server = initSocketServer(socketsUrl);

  return eventChannel((emit) => {
    const handler = (event: any) => {
      if (!event) return;
      emit(event);
    };

    server.on(eventName, handler);

    const unsubscribe = () => {
      server.off(eventName, handler);
    };

    return unsubscribe;
  });
}
