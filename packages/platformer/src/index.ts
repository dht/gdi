/*************** ROUTING ***************/
export { RouterBuilder } from './router/builders/RouterBuilder';

/*************** SAGA-MANAGER ***************/
export { initialState } from './saga-manager/store/initialState';
export type { SagaStore } from './saga-manager/store/initialState';
export { startSaga, stopSaga } from './saga-manager/store/actions';
export { initSagaManager } from './saga-manager/sagas/sagaManager';

/*************** STORE-BUILDER ***************/
export { SelectorsBuilder } from './store-builder/builders/SelectorsBuilder';
export type { ISelectorsByApp } from './store-builder/builders/SelectorsBuilder';

/*************** API-CONFIG-BUILDER ***************/
export { ApiConfigBuilder } from './api-builder/ApiConfigBuilder';

/*************** I18N ***************/
export { I18nProvider } from './i18n/i18n.provider';
export { I18nBuilder } from './i18n/builders/I18nBuilder';
export { createTranslationHook } from './i18n/useTranslation';

/*************** FIREBASE ***************/
export { initFirebase } from './firebase/firebase';

/*************** GLOBAL ***************/
export { useStructure } from './core/platform-selectors';
export { PlatformLifeCycleEvents } from './core/platform-lifecycle';
export {
    PlatformContextProvider,
    PlatformContext,
} from './core/platform-context';
export * from './types';
export { initPlatform, getStore } from './initPlatform';
export { useAction } from './hooks/useAction';
export type { IWidget, IWidgets, IWidgetInstancesByPageList } from 'igrid';
export { BootstrapContainer as Bootstrap } from './bootstrap/components/Bootstrap/Bootstrap';
export { prompt } from './bootstrap/components/Prompt/Prompt.actions';
export { useDispatchP } from './hooks/useDispatchP';
