import { Feature } from './feature-simple/Feature';
import { widgetInfo as featureInfo } from './feature-simple';

import { Footer } from './footer-simple/Footer';
import { widgetInfo as footerInfo } from './footer-simple';

import { Hero } from './hero-simple/Hero';
import { widgetInfo as heroInfo } from './hero-simple';

import { ImageAndText } from './imageAndText-simple/ImageAndText';
import { widgetInfo as imageAndTextInfo } from './imageAndText-simple';

import { Installation } from './installation-simple/Installation';
import { widgetInfo as installationInfo } from './installation-simple';

import { LineCta } from './lineCta-simple/LineCta';
import { widgetInfo as lineCtaInfo } from './lineCta-simple';

import { SectionHeader } from './sectionHeader-simple/SectionHeader';
import { widgetInfo as sectionHeaderInfo } from './sectionHeader-simple';

import { UserBar } from './userBar-simple/UserBar';
import { widgetInfo as userBarInfo } from './userBar-simple';

export const widgets: IWidgets = {
    'com.usegdi.templates.basic.feature-simple': {
        component: Feature,
        ...featureInfo,
    },
    'com.usegdi.templates.basic.footer-simple': {
        component: Footer,
        ...footerInfo,
    },
    'com.usegdi.templates.basic.hero-simple': {
        component: Hero,
        ...heroInfo,
    },
    'com.usegdi.templates.basic.imageAndText-simple': {
        component: ImageAndText,
        ...imageAndTextInfo,
    },
    'com.usegdi.templates.basic.installation-simple': {
        component: Installation,
        ...installationInfo,
    },
    'com.usegdi.templates.basic.lineCta-simple': {
        component: LineCta,
        ...lineCtaInfo,
    },
    'com.usegdi.templates.basic.sectionHeader-simple': {
        component: SectionHeader,
        ...sectionHeaderInfo,
    },
    'com.usegdi.templates.basic.userBar-simple': {
        component: UserBar,
        ...userBarInfo,
    },
};
