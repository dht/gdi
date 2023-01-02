/*************** ROUTING ***************/
export { RouterBuilder } from './builders/RouterBuilder';

/*************** SAGA-MANAGER ***************/
export { initialState } from './sagas/manager/manager.initialState';
export { startSaga, stopSaga } from './sagas/manager/manager.actions';
export { initSagaManager } from './sagas/manager/sagaManager';

/*************** STORE-BUILDER ***************/
export { SelectorsBuilder } from './builders/SelectorsBuilder';

/*************** API-CONFIG-BUILDER ***************/
export { ApiConfigBuilder } from './builders/ApiConfigBuilder';

/*************** FIREBASE ***************/
export { initFirebase } from './utils/firebase';

/*************** GLOBAL ***************/
export { useStructure } from './core/platform.selectors';
export {
    PlatformContextProvider,
    PlatformContext,
} from './core/Platform.context';
export * from './types';
export { initPlatform, getStore } from './core/platform.init';
export type { IWidget, IWidgets, IWidgetInstancesByPageList } from 'igrid';
export { BootstrapContainer as Bootstrap } from './components/Bootstrap/Bootstrap';
export { CurrentIdsHoc } from './components/Bootstrap/Bootstrap.currentIds';
export { firebase } from './utils/firebase';
export { Sleeve as Wrapper } from './components/Sleeve/Sleeve';
export { ServiceSleeve as ServiceWrapper } from './components/ServiceSleeve/ServiceSleeve';

export { useCrudDefinitions } from './hooks/useCrudDefinitions';
export { initDemo, getDemoConfig } from './utils/demo';
export { ServiceContextProvider } from './core/Service.context';
export {
    serviceRegisterSuccessChannel,
    serviceRegisterErrorChannel,
} from './sagas/channels/channel.serviceLifecycle';
