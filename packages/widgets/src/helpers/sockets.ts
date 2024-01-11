import { io } from 'socket.io-client';

const cache: any = {};

export const initSocketServer = (url: string) => {
  if (cache[url]) {
    return cache[url];
  }

  const server = io(url);

  server.on('connect', () => {
    console.log('Connected to the server');
  });

  server.on('disconnect', () => {
    console.log('Disconnected from the server');
  });

  cache[url] = server;

  return server;
};

export const closeSocketServer = (url: string) => {
  if (cache[url]) {
    cache[url].close();
  }
};
