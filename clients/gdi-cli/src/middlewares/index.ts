import { middlewares as block } from './midCreateBlock';
import { middlewares as site } from './midCreateSite';

export default {
    create: {
        block,
        site,
    },
};
