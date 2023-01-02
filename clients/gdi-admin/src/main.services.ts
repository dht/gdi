import { initSap as initGoogleSync } from '@gdi/service-google-sync';
import { initSap as initGuidance } from '@gdi/service-guidance';
import { initSap as initFreelancers } from '@gdi/service-freelancers';
import { initSap as initLevelUp } from '@gdi/service-level-up';

export const initializersServices = {
    googleSync: initGoogleSync,
    guidance: initGuidance,
    freelancers: initFreelancers,
    levelUp: initLevelUp,
};
