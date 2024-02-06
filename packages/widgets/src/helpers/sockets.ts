import { io } from 'socket.io-client';

const cacheSockets: any = {};

export const initSocket = (url: string) => {
  if (cacheSockets[url]) {
    return cacheSockets[url];
  }

  const socket = io(url);

  socket.on('connect', () => {
    console.log('Connected to the server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from the server');
  });

  cacheSockets[url] = socket;

  return socket;
};

export const closeSocket = (url: string) => {
  if (cacheSockets[url]) {
    cacheSockets[url].close();
  }
};
