import { Hero } from './hero-simple/Hero';
import { blockInfo as heroInfo } from './hero-simple';

export const blocks: IBlocks = {
    'com.usegdi.templates.blog.hero-simple': {
        id: 'com.usegdi.templates.blog.hero-simple',
        component: Hero,
        info: heroInfo,
    },
};

// const i = Object.values(blocks).reduce((output, i) => {
//     output[i.id] = i.info;
//     return output;
// }, {} as Json);

// console.log(JSON.stringify(i, null, 4));
