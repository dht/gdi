import { AxiosInstance } from 'axios';
import { getNavLocation } from '../../utils/navigation';
import { logCallback } from '../../utils/events';
import { sagas } from '../../sagas';
import { tokenStorage } from '../../utils/tokenStorage';
import { initAuth } from '../../../auth/initAuth';
import type { BootstrapProps } from './Bootstrap';
import { IFirebaseConfig, PatchContextMethod } from '../../../types';
import { getStore, initPlatform } from '../../../initPlatform';
import { initFirebase } from '../../../firebase/firebase';
import { $s, getString, systemEvent } from 'shared-base';

export const CURRENT_ACCOUNT_KEY = 'CURRENT_ACCOUNT';

type AllSaps = {};

type SapId = keyof AllSaps;

const activeSaps: SapId[] = [];

const initSapMethods: AllSaps = {};

let didBootstrap = false;

export const bootstrapApp = async (
    props: BootstrapProps,
    patchContext: PatchContextMethod
) => {
    if (didBootstrap) {
        return;
    }

    didBootstrap = true;

    systemEvent('bootstrapApp');

    const { config } = props;
    const {
        baseURL,
        activeApps,
        initializers,
        menuSections,
        firebaseConfigs,
        noServerMode,
    } = config;

    const { axiosInstance } = await initAuth(
        {
            baseURL,
            tokenStorage,
            logCallback,
            getNavLocation,
        },
        getStore
    );

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
