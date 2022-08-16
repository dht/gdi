import { AxiosInstance } from 'axios';
import { getNavLocation } from '../../utils/navigation';
import { logCallback } from '../../utils/events';
import { sagas } from '../../sagas';
import { tokenStorage } from '../../utils/tokenStorage';
import { initAuth } from '../../../auth/initAuth';
import type { BootstrapProps } from './Bootstrap';
import { PatchContextMethod } from '../../../types';
import { getStore, initPlatform } from '../../../initPlatform';

type AllSaps = {};

type SapId = keyof AllSaps;

const activeSaps: SapId[] = [];

const initSapMethods: AllSaps = {};

export const bootstrapApp = async (
    props: BootstrapProps,
    patchContext: PatchContextMethod
) => {
    const { config } = props;
    const { baseURL, activeApps, initializers, menuSections } = config;

    const { axiosInstance } = await initAuth(
        {
            baseURL,
            tokenStorage,
            logCallback,
            getNavLocation,
        },
        getStore
    );

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
