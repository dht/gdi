import axios, { AxiosInstance } from 'axios';
import { sagas } from '../../sagas';
import type { BootstrapProps } from './Bootstrap';
import { IFirebaseConfig, IPlatformState } from '../../types';
import { initPlatform } from '../../core/platform.init';
import { initFirebase } from '../../utils/firebase';
import { $s, getString, systemEvent } from 'shared-base';

export const CURRENT_ACCOUNT_KEY = 'CURRENT_ACCOUNT';

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
        activeSaps,
        initializers,
        menuSections,
        firebaseConfigs,
        languageCode,
        connectionType,
    } = config;

    const firebaseConfig = getFirebaseConfig(firebaseConfigs);
    const accountName = firebaseConfig.projectId;
    systemEvent('initFirebase', firebaseConfig);
    initFirebase(firebaseConfig);

    const availableAccounts = firebaseConfigs.map((config) => config.projectId);

    await initPlatform(
        {
            accountName,
            availableAccounts,
            activeApps,
            activeSaps,
            initAppMethods: initializers,
            initSapMethods: initializers,
            sagas,
            menuSections,
            logger: (message, data) => $s(message, data),
            languageCode,
            connectionType: connectionType as any,
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
