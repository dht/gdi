import { log } from './log';
import { initSockets } from './sockets';

type Callback = (data: Json) => void;

let io: any;
let socket: any;

export const setSocketIO = (socketIOInstance: any) => {
    io = socketIOInstance;
};

export const initClientSockets = (url: string) => {
    // already initialized

    if (socket) {
        return;
    }

    socket = io.connect(url, { transports: ['websocket'] });

    socket.io.on('connect', () => {
        log('client socket connected');
    });

    socket.io.on('error', (error: any) => {
        log('client socket error' + error.message);
    });

    initSockets({
        on,
        emit,
    });
};

export const emit = (eventName: string, data: Json) => {
    if (!socket) {
        return;
    }

    socket.emit(eventName, data);
};

export const on = (eventName: string, callback: Callback) => {
    if (!socket) {
        return;
    }
    socket.on(eventName, callback);
};

export const off = (eventName: string, callback: Callback) => {
    if (!socket) {
        return;
    }
    socket.off(eventName, callback);
};
