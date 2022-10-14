import { Feature } from './feature-basic/Feature';
import { widgetInfo as featureInfo } from './feature-basic';

import { Footer } from './footer-basic/Footer';
import { widgetInfo as footerInfo } from './footer-basic';

import { Hero } from './hero-basic/Hero';
import { widgetInfo as heroInfo } from './hero-basic';

import { ImageAndText } from './imageAndText-basic/ImageAndText';
import { widgetInfo as imageAndTextInfo } from './imageAndText-basic';

import { Installation } from './installation-basic/Installation';
import { widgetInfo as installationInfo } from './installation-basic';

import { LineCta } from './lineCta-basic/LineCta';
import { widgetInfo as lineCtaInfo } from './lineCta-basic';

import { SectionHeader } from './sectionHeader-basic/SectionHeader';
import { widgetInfo as sectionHeaderInfo } from './sectionHeader-basic';

import { UserBar } from './userBar-basic/UserBar';
import { widgetInfo as userBarInfo } from './userBar-basic';

export const blocks: IWidgets = {
    'com.usegdi.templates.starter.feature-basic': {
        component: Feature,
        ...featureInfo,
    },
    'com.usegdi.templates.starter.footer-basic': {
        component: Footer,
        ...footerInfo,
    },
    'com.usegdi.templates.starter.hero-basic': {
        component: Hero,
        ...heroInfo,
    },
    'com.usegdi.templates.starter.imageAndText-basic': {
        component: ImageAndText,
        ...imageAndTextInfo,
    },
    'com.usegdi.templates.starter.installation-basic': {
        component: Installation,
        ...installationInfo,
    },
    'com.usegdi.templates.starter.lineCta-basic': {
        component: LineCta,
        ...lineCtaInfo,
    },
    'com.usegdi.templates.starter.sectionHeader-basic': {
        component: SectionHeader,
        ...sectionHeaderInfo,
    },
    'com.usegdi.templates.starter.userBar-basic': {
        component: UserBar,
        ...userBarInfo,
    },
};
