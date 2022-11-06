import axios, { AxiosInstance } from 'axios';
import { sagas } from '../../sagas';
import type { BootstrapProps } from './Bootstrap';
import { IFirebaseConfig, IPlatformState } from '../../types';
import { initPlatform } from '../../core/platform.init';
import { initFirebase } from '../../utils/firebase';
import { $s, getString, systemEvent } from 'shared-base';

export const CURRENT_ACCOUNT_KEY = 'CURRENT_ACCOUNT';

type AllSaps = {};

type SapId = keyof AllSaps;

const activeSaps: SapId[] = [];

const initSapMethods: AllSaps = {};

let didBootstrap = false;

export const bootstrapApp = async (
    props: BootstrapProps,
    patchContext: (change: Partial<IPlatformState>) => void
) => {
    if (didBootstrap) {
        return;
    }

    didBootstrap = true;

    systemEvent('bootstrapApp');

    const { config } = props;
    const {
        activeApps,
        initializers,
        menuSections,
        firebaseConfigs,
        noServerMode,
        languageCode,
    } = config;

    const axiosInstance: any = axios.create({
        baseURL: 'http://localhost:3009',
    });

    const firebaseConfig = getFirebaseConfig(firebaseConfigs);
    const accountName = firebaseConfig.projectId;
    systemEvent('initFirebase', firebaseConfig);
    initFirebase(firebaseConfig);

    const availableAccounts = firebaseConfigs.map((config) => config.projectId);

    await initPlatform<any>(
        axiosInstance as AxiosInstance,
        {
            accountName,
            availableAccounts,
            activeApps,
            activeSaps,
            initAppMethods: initializers,
            initSapMethods,
            sagas,
            menuSections,
            logger: (message, data) => $s(message, data),
            noServerMode,
            languageCode,
        },
        patchContext
    );
};

const getFirebaseConfig = (firebaseConfigs: IFirebaseConfig[]) => {
    const accountName = getString(CURRENT_ACCOUNT_KEY);

    const firebaseConfig = firebaseConfigs.find(
        (config) => config.projectId === accountName
    );

    return firebaseConfig ? firebaseConfig : firebaseConfigs[0];
};
