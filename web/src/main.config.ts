import { initFirebase, ga, enableAnalytics } from '@gdi/firebase';
import { actions, initStore } from '@gdi/store-base';
import { config } from './adapters.config';
import { boardsRoot } from './main.root';
import { root as rootSaga } from './sagas/manage.sagas';
import { initAxios } from './utils/axios';
import { setStore } from './utils/globals';
import { toast, setAssetsRoot, setAnalyticsMethod } from '@gdi/ui';

const isEmulator = import.meta.env.VITE_USE_EMULATOR === 'true';
const isAnalyticsOn = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
const assetsRootUrl = import.meta.env.VITE_ASSETS_ROOT_URL;
const boardsRootUrl = import.meta.env.VITE_BOARDS_ROOT_URL;
const docsRootUrl = import.meta.env.VITE_DOCS_ROOT_URL;
const socketsUrl = import.meta.env.VITE_SOCKETS_ROOT_URL;

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const { db } = initFirebase(firebaseConfig, isEmulator, toast.show);
const storeBuilder = initStore(
  rootSaga,
  {
    fireStore: db,
  },
  config.dbAdapter,
  isEmulator
);

export const store = storeBuilder.build();
setStore(store);
// @ts-ignore
window.store = store;

store.dispatch(
  actions.appState.patch({
    assetsRootUrl,
    boardsRootUrl,
    docsRootUrl,
    socketsUrl,
    isEmulator: isEmulator,
  })
);

setAssetsRoot(assetsRootUrl);
setAnalyticsMethod(ga);

enableAnalytics(isAnalyticsOn);

export const baseStorageUrl = `https://storage.googleapis.com/download/storage/v1/b/${
  import.meta.env.VITE_PROJECT_ID
}.appspot.com/o`;

initAxios(boardsRoot);
