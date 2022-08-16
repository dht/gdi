import { Footer } from './footer-simple/Footer';
import { blockInfo as footerInfo } from './footer-simple';

import { Hero } from './hero-simple/Hero';
import { blockInfo as heroInfo } from './hero-simple';

import { LineCta } from './lineCta-simple/LineCta';
import { blockInfo as lineCtaInfo } from './lineCta-simple';

import { TextAndImage } from './textAndImage-simple/TextAndImage';
import { blockInfo as textAndImageInfo } from './textAndImage-simple';

import { ThreePoints } from './threePoints-simple/ThreePoints';
import { blockInfo as threePointsInfo } from './threePoints-simple';

import { UserBar } from './userBar-simple/UserBar';
import { blockInfo as userBarInfo } from './userBar-simple';

export const blocks = {
    'com.useGdi.templates.gdi.footer-simple': {
        id: 'com.useGdi.templates.gdi.footer-simple',
        component: Footer,
        info: footerInfo,
    },
    'com.useGdi.templates.gdi.hero-simple': {
        id: 'com.useGdi.templates.gdi.hero-simple',
        component: Hero,
        info: heroInfo,
    },
    'com.useGdi.templates.gdi.lineCta-simple': {
        id: 'com.useGdi.templates.gdi.lineCta-simple',
        component: LineCta,
        info: lineCtaInfo,
    },
    'com.useGdi.templates.gdi.textAndImage-simple': {
        id: 'com.useGdi.templates.gdi.textAndImage-simple',
        component: TextAndImage,
        info: textAndImageInfo,
    },
    'com.useGdi.templates.gdi.threePoints-simple': {
        id: 'com.useGdi.templates.gdi.threePoints-simple',
        component: ThreePoints,
        info: threePointsInfo,
    },
    'com.useGdi.templates.gdi.userBar-simple': {
        id: 'com.useGdi.templates.gdi.userBar-simple',
        component: UserBar,
        info: userBarInfo,
    },
};
