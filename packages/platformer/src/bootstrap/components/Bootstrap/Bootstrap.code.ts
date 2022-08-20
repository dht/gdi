import { AxiosInstance } from 'axios';
import { getNavLocation } from '../../utils/navigation';
import { logCallback } from '../../utils/events';
import { sagas } from '../../sagas';
import { tokenStorage } from '../../utils/tokenStorage';
import { initAuth } from '../../../auth/initAuth';
import type { BootstrapProps } from './Bootstrap';
import { PatchContextMethod } from '../../../types';
import { getStore, initPlatform } from '../../../initPlatform';
import { initFirebase } from '../../../firebase/firebase';

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

    const { config } = props;
    const { baseURL, activeApps, initializers, menuSections, firebaseConfig } =
        config;

    const { axiosInstance } = await initAuth(
        {
            baseURL,
            tokenStorage,
            logCallback,
            getNavLocation,
        },
        getStore
    );

    initFirebase(firebaseConfig);

    await initPlatform<any>(
        axiosInstance as AxiosInstance,
        {
            activeApps,
            activeSaps,
            initAppMethods: initializers,
            initSapMethods,
            sagas,
            menuSections,
        },
        patchContext
    );
};
