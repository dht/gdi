import { Feature } from './feature-simple/Feature';
import { blockInfo as featureInfo } from './feature-simple';

import { Footer } from './footer-simple/Footer';
import { blockInfo as footerInfo } from './footer-simple';

import { Hero } from './hero-simple/Hero';
import { blockInfo as heroInfo } from './hero-simple';

import { ImageAndText } from './imageAndText-simple/ImageAndText';
import { blockInfo as imageAndTextInfo } from './imageAndText-simple';

export const blocks: IBlocks = {
    'com.usegdi.templates.minimalist.feature-simple': {
        id: 'com.usegdi.templates.minimalist.feature-simple',
        component: Feature,
        info: featureInfo,
    },
    'com.usegdi.templates.minimalist.footer-simple': {
        id: 'com.usegdi.templates.minimalist.footer-simple',
        component: Footer,
        info: footerInfo,
    },
    'com.usegdi.templates.minimalist.hero-simple': {
        id: 'com.usegdi.templates.minimalist.hero-simple',
        component: Hero,
        info: heroInfo,
    },
    'com.usegdi.templates.minimalist.imageAndText-simple': {
        id: 'com.usegdi.templates.minimalist.imageAndText-simple',
        component: ImageAndText,
        info: imageAndTextInfo,
    },
};

// const i = Object.values(blocks).reduce((output, i) => {
//     output[i.id] = i.info;
//     return output;
// }, {} as Json);

// console.log(JSON.stringify(i, null, 4));
