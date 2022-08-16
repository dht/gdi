import { id } from '../$CMP';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: false,
            header: true,
            description: false,
            ctaButtonText: true,
        },
        colors: {
            background: '#1a7870',
        },
        extra: {
            href: 'url',
            imageUrl: 'url',
        },
    },
};
