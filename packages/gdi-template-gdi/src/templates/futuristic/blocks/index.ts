import { Feature } from './feature-simple/Feature';
import { blockInfo as featureInfo } from './feature-simple';

import { Footer } from './footer-simple/Footer';
import { blockInfo as footerInfo } from './footer-simple';

import { Hero } from './hero-simple/Hero';
import { blockInfo as heroInfo } from './hero-simple';

import { ImageAndText } from './imageAndText-simple/ImageAndText';
import { blockInfo as imageAndTextInfo } from './imageAndText-simple';

import { Installation } from './installation-simple/Installation';
import { blockInfo as installationInfo } from './installation-simple';

import { LineCta } from './lineCta-simple/LineCta';
import { blockInfo as lineCtaInfo } from './lineCta-simple';

import { SectionHeader } from './sectionHeader-simple/SectionHeader';
import { blockInfo as sectionHeaderInfo } from './sectionHeader-simple';

import { UserBar } from './userBar-simple/UserBar';
import { blockInfo as userBarInfo } from './userBar-simple';

import { IBlocks } from '@gdi/web-ui';

export const blocks: IBlocks = {
    'com.usegdi.templates.futuristic.feature-simple': {
        id: 'com.usegdi.templates.futuristic.feature-simple',
        component: Feature,
        info: featureInfo,
    },
    'com.usegdi.templates.futuristic.footer-simple': {
        id: 'com.usegdi.templates.futuristic.footer-simple',
        component: Footer,
        info: footerInfo,
    },
    'com.usegdi.templates.futuristic.hero-simple': {
        id: 'com.usegdi.templates.futuristic.hero-simple',
        component: Hero,
        info: heroInfo,
    },
    'com.usegdi.templates.futuristic.imageAndText-simple': {
        id: 'com.usegdi.templates.futuristic.imageAndText-simple',
        component: ImageAndText,
        info: imageAndTextInfo,
    },
    'com.usegdi.templates.futuristic.installation-simple': {
        id: 'com.usegdi.templates.futuristic.installation-simple',
        component: Installation,
        info: installationInfo,
    },
    'com.usegdi.templates.futuristic.lineCta-simple': {
        id: 'com.usegdi.templates.futuristic.lineCta-simple',
        component: LineCta,
        info: lineCtaInfo,
    },
    'com.usegdi.templates.futuristic.sectionHeader-simple': {
        id: 'com.usegdi.templates.futuristic.sectionHeader-simple',
        component: SectionHeader,
        info: sectionHeaderInfo,
    },
    'com.usegdi.templates.futuristic.userBar-simple': {
        id: 'com.usegdi.templates.futuristic.userBar-simple',
        component: UserBar,
        info: userBarInfo,
    },
};

// const i = Object.values(blocks).reduce((output, i) => {
//     output[i.id] = i.info;
//     return output;
// }, {} as Json);

// console.log(JSON.stringify(i, null, 4));
