export type SocketServer = {
    broadcast: any;
    on: any;
};

export type SocketClient = {
    emit: any;
    on: any;
};

export type SocketConfig = SocketServer | SocketClient;

export type SyncOptions = {
    stateKey: string;
    config: SocketConfig;
    debug?: boolean;
};

export function isServerConfig(config: SocketConfig): config is SocketServer {
    return (config as SocketServer).broadcast !== undefined;
}

export type CorsDomainsAndPorts = {
    domains: string[];
    ports: number[];
};

export type SyncNodes = {
    patch: string[];
    setAll: string[];
};

export type SyncStateConfig = {
    actions: any;
    syncNodes: SyncNodes;
};

export type ServerConfig = {
    socketIOInstance: any;
    expressServerInstance: any;
    corsDomainsAndPorts: CorsDomainsAndPorts;
    debug?: boolean;
    syncStateConfig?: SyncStateConfig;
};

export type ClientConfig = {
    socketIOInstance: any;
    reduxStoreId: string;
    socketServerUrl: string;
    debug?: boolean;
};
