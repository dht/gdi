import * as storeConfig from '../store';
import { endpointsConfigOverrides } from './endpoints';
import { firebase, initFirebase } from './firebase';
import { firebaseConfig } from '../main.firebase';
import { siteSagas } from '../sagas';
import {
    ConnectionType,
    EndpointConfig,
    FirestoreAdapter,
    initReduxConnected,
    IReduxConnectedConfig,
    RetryStrategy,
    StoreBuilder,
} from 'redux-connected';

const DEBUG = false;

let isInitialized = false;

export const initSite = () => {
    if (isInitialized) {
        return;
    }

    isInitialized = true;

    initFirebase(firebaseConfig);

    const firestoreAdapter = new FirestoreAdapter(firebase.value.app);

    const storeBuilder = new StoreBuilder('main');

    storeBuilder
        .withReducers('site', storeConfig.reducers)
        .withInitialState('site', storeConfig.initialState)
        .withDevtoolsExtensions(true)
        .withSagas(...siteSagas);

    const config: IReduxConnectedConfig = {
        defaultEndpointsConfig: DEFAULT_ENDPOINT_CONFIG,
        endpointsConfigOverrides: endpointsConfigOverrides(
            ConnectionType.FIRESTORE
        ),
        adapters: {
            firestore: firestoreAdapter,
        },
        enableReduxDevtools: true,
        logger: defaultLogger,
    };

    initReduxConnected(config, storeBuilder);

    const store = storeBuilder.build();
    storeConfig.clearState(store);

    return store;
};

const DEFAULT_ENDPOINT_CONFIG: EndpointConfig = {
    id: 'default',
    connectionType: ConnectionType.NONE,
    retryStrategy: RetryStrategy.X2_TIMES,
    requestsPerMinute: 12,
};

type LogMethod = (message: string, data?: Json) => void;

const defaultLogger: LogMethod = (message: string, data?: Json) => {
    if (!DEBUG) {
        return;
    }
    console.log(message, data);
};
