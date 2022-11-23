import { BigOne } from './BigOne-basic/BigOne';
import { widgetInfo as BigOneInfo } from './BigOne-basic';

import { CtaLine } from './CtaLine-basic/CtaLine';
import { widgetInfo as CtaLineInfo } from './CtaLine-basic';

import { FourPack } from './FourPack-basic/FourPack';
import { widgetInfo as FourPackInfo } from './FourPack-basic';

import { PageBlog } from './PageBlog-basic/PageBlog';
import { widgetInfo as PageBlogInfo } from './PageBlog-basic';

import { SixPack } from './SixPack-basic/SixPack';
import { widgetInfo as SixPackInfo } from './SixPack-basic';

import { TopHeader } from './TopHeader-basic/TopHeader';
import { widgetInfo as TopHeaderInfo } from './TopHeader-basic';

export const blocks: IWidgets = {
    'com.usegdi.templates.tech.bigOne-basic': {
        component: BigOne,
        ...BigOneInfo,
    },
    'com.usegdi.templates.tech.ctaLine-basic': {
        component: CtaLine,
        ...CtaLineInfo,
    },
    'com.usegdi.templates.tech.fourPack-basic': {
        component: FourPack,
        ...FourPackInfo,
    },
    'com.usegdi.templates.tech.pageBlog-basic': {
        component: PageBlog,
        ...PageBlogInfo,
    },
    'com.usegdi.templates.tech.sixPack-basic': {
        component: SixPack,
        ...SixPackInfo,
    },
    'com.usegdi.templates.tech.topHeader-basic': {
        component: TopHeader,
        ...TopHeaderInfo,
    },
};
