import { ISampleDataPerFlavour } from '@gdi/web-ui';

export const sampleData: ISampleDataPerFlavour = {
    normal: {
        id: 'normal',
        strings: {
            header: 'Build for [Firebase]',
            description:
                "Use Firebase to host your site, store your data and manage your users. You can do all that with Firebase's free Spark plan*",
            buttonText: 'See features',
            headerSecondary: 'Made with [React]',
            descriptionSecondary:
                "It's easy to extend the CMS with your React skills. Create new templates, apps or data stores. Use JSONs to import & export anything",
            buttonTextSecondary: 'Visit Github',
        },
        colors: {},
        extra: {
            href: '#',
            hrefSecondary: '#',
        },
    },
};
