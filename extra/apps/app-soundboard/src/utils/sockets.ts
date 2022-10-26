import { io } from 'socket.io-client';

type Callback = (data: Json) => void;

let socket: any;

export const initSockets = (url: string) => {
    // already initialized
    if (socket) {
        return;
    }
    socket = io(url);
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
