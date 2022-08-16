import { CorsDomainsAndPorts } from './../types';
import chalk from 'chalk';
import { initSockets } from './sockets';
import { reduxActions, reduxStore, reduxSyncNodes } from './store';

let socketIO: any;

const sockets: any = [];
const callbacks: any = {};

let io: any;

export const setSocketIO = (socketIOInstance: any) => {
    socketIO = socketIOInstance;
};

const corsToAllowedOrigin = (
    corsDomainsAndPorts: CorsDomainsAndPorts
): string[] => {
    const origin: string[] = [];
    corsDomainsAndPorts.domains.forEach((domain) => {
        corsDomainsAndPorts.ports.forEach((port) => {
            origin.push(`${domain}:${port}`);
        });
    });
    return origin;
};

export const initServerSockets = (
    server: any,
    corsDomainsAndPorts: CorsDomainsAndPorts
) => {
    io = socketIO(server, {
        cors: {
            origin: corsToAllowedOrigin(corsDomainsAndPorts),
        },
    });

    io.on('connection', onConnection);

    initSockets({
        on,
        broadcast,
    });
};

const emit = (eventName: string, data: Json) => {
    sockets.forEach((socket: any) => {
        socket.emit(eventName, data);
    });
};

export const broadcast = (eventName: string, data: Json) => {
    io.emit(eventName, data);
};

export const on = (eventName: string, callback: any) => {
    callbacks[eventName] = callback;
};

export const off = (eventName: string, callback: any) => {
    sockets.forEach((socket: any) => {
        socket.off(eventName, callback);
    });

    delete callback[eventName];
};

const onConnection = (socket: any) => {
    const transport = socket.conn.transport.name;
    console.log('transport ->', transport);

    socket.conn.on('upgrade', () => {
        const upgradedTransport = socket.conn.transport.name; // in most cases, "websocket"
        console.log('upgradedTransport ->', upgradedTransport);
    });

    sockets.push(socket);
    logNumberOfClients();

    for (let eventName of Object.keys(callbacks)) {
        socket.on(eventName, callbacks[eventName]);
    }

    syncState();

    socket.on('disconnect', () => {
        const index = sockets.indexOf(socket);
        sockets.splice(index, 1);
        logNumberOfClients();
    });
};

const logNumberOfClients = () => {
    console.log(`${chalk.green(sockets.length)} clients connected`);
};

export const syncState = () => {
    const state = reduxStore.getState();

    Object.keys(reduxSyncNodes).forEach((verb) => {
        (reduxSyncNodes as any)[verb].forEach((nodeName: string) => {
            const value = state[nodeName];
            const action = reduxActions[nodeName][verb];
            emit('action', remote(action(value)));
        });
    });
};

export const remote = (action: any) => ({ ...action, isRemote: true });
