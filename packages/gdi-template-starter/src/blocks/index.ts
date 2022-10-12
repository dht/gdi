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
    'com.usegdi.templates.starter.feature-simple': {
        component: Feature,
        ...featureInfo,
    },
    'com.usegdi.templates.starter.footer-simple': {
        component: Footer,
        ...footerInfo,
    },
    'com.usegdi.templates.starter.hero-simple': {
        component: Hero,
        ...heroInfo,
    },
    'com.usegdi.templates.starter.imageAndText-simple': {
        component: ImageAndText,
        ...imageAndTextInfo,
    },
    'com.usegdi.templates.starter.installation-simple': {
        component: Installation,
        ...installationInfo,
    },
    'com.usegdi.templates.starter.lineCta-simple': {
        component: LineCta,
        ...lineCtaInfo,
    },
    'com.usegdi.templates.starter.sectionHeader-simple': {
        component: SectionHeader,
        ...sectionHeaderInfo,
    },
    'com.usegdi.templates.starter.userBar-simple': {
        component: UserBar,
        ...userBarInfo,
    },
};
