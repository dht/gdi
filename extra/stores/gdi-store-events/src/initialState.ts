import { generateReducersForStore } from 'redux-store-generator';
import { IEventsStore } from './types';
import p from '../package.json';

export const initialState: IEventsStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateEvents: {
        stateKey: 'events',
        currentNodeId: 'events',
    },
    events: {
        '1': {
            id: '1',
            name: '',
            date: '',
            location: '',
            rating: 10,
            description: '',
            link: '',
            googleEventId: '',
            tags: [],
            dataTags: [],
        },
    },
    reminders: {
        '1': {
            id: '1',
            title: 'Sint est dolore.',
            description:
                'Voluptatem odio eos cumque doloremque quia tempora corporis. Et et eum ea. Eos vero sint. Eos temporibus quis eaque asperiores ullam. Quaerat ut et. Saepe error perferendis illum velit distinctio eaque voluptas minus a.\nEst voluptas natus repellat quae eius. Reprehenderit reprehenderit pariatur quis fuga totam et. Illo sunt quo. Molestias iste quia maiores veritatis temporibus rerum ut perferendis eveniet.\nQui dolorem non occaecati. Laudantium enim aut debitis aperiam voluptatem. Suscipit sed praesentium quis sed. Et mollitia consectetur deleniti rerum aut alias. Rerum aut quia odio. Molestiae dignissimos quia deserunt.',
            date: '2023-05-04 23:37:04',
            itemType: 'person',
            itemId: '980',
            isCompleted: false,
            snoozeUntil: '2023-05-04 23:37:04',
            tags: [],
            dataTags: [],
        },
    },
};

export const reducers = generateReducersForStore<IEventsStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
