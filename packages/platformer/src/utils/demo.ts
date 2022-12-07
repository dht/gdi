import { getJson, getString, patchJson } from 'shared-base';

const CURRENT_ACCOUNT_KEY = 'CURRENT_ACCOUNT';
const DEMO_CONFIG_KEY = 'DEMO_CONFIG';

export const getCurrentAccount = () => {
    const currentAccount =
        getString(CURRENT_ACCOUNT_KEY) ||
        import.meta.env.VITE_FIREBASE_PROJECT_ID_1;

    return currentAccount;
};

export const getDemoDataUrl = () => {
    const demoDataUrl = import.meta.env.VITE_DEMO_DATA_URL; // prettier-ignore
    return demoDataUrl;
};

export const getDemoFlag = (): boolean | undefined => {
    const search = new URLSearchParams(document.location.search);

    const demoParam = search.get('demo');

    let on: boolean | undefined;

    // cannot start DEMO mode if no DEMO_DATA_URL is provided
    if (getDemoDataUrl() === undefined) {
        return;
    }

    if (demoParam === 'on') {
        on = true;
    } else if (demoParam === 'off') {
        on = false;
    }

    return on;
};

export const getDemoConfig = () => {
    const currentAccount = getCurrentAccount();
    const allConfigs = getJson(DEMO_CONFIG_KEY) ?? {};
    return allConfigs[currentAccount] ?? {};
};

export const initDemo = () => {
    const demoFlag = getDemoFlag();

    if (typeof demoFlag !== 'boolean') {
        return;
    }

    const demoConfig = {
        on: demoFlag,
        url: getDemoDataUrl(),
    };

    const currentAccount = getCurrentAccount();

    patchJson(DEMO_CONFIG_KEY, {
        [currentAccount]: demoConfig,
    });
};
