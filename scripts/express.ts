import * as http from 'http';
import * as express from 'express';
import { Server, Socket } from 'socket.io';
import * as cors from 'cors'; // Import the cors middleware

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  },
});

export const createExpress = () => {
  return { app, io, server };
};
