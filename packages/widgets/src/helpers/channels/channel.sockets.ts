import { eventChannel } from 'redux-saga';
import { initSocket } from '../sockets';

export function createSocketsChannel(serverUrl: string, eventName: string) {
  const socket = initSocket(serverUrl);

  return eventChannel((emit) => {
    const handler = (event: any) => {
      if (!event) return;
      emit(event);
    };

    socket.on(eventName, handler);

    const unsubscribe = () => {
      socket.off(eventName, handler);
    };

    return unsubscribe;
  });
}
