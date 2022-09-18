import { Feature } from './feature-simple/Feature';
import { widgetInfo as featureInfo } from './feature-simple';

import { Footer } from './footer-simple/Footer';
import { widgetInfo as footerInfo } from './footer-simple';

import { Hero } from './hero-simple/Hero';
import { widgetInfo as heroInfo } from './hero-simple';

import { ImageAndText } from './imageAndText-simple/ImageAndText';
import { widgetInfo as imageAndTextInfo } from './imageAndText-simple';

export const widgets: IWidgets = {
    'com.usegdi.templates.minimalist.feature-simple': {
        component: Feature,
        ...featureInfo,
    },
    'com.usegdi.templates.minimalist.footer-simple': {
        component: Footer,
        ...footerInfo,
    },
    'com.usegdi.templates.minimalist.hero-simple': {
        component: Hero,
        ...heroInfo,
    },
    'com.usegdi.templates.minimalist.imageAndText-simple': {
        component: ImageAndText,
        ...imageAndTextInfo,
    },
};
