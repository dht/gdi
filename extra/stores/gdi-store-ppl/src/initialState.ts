import { generateReducersForStore } from 'redux-store-generator';
import { IPplStore } from './types';
import { actions } from './actions';

export const initialState: IPplStore = {
    appStatePpl: {
        stateKey: 'ppl',
        currentCategory: 'friends',
        currentView: 'grid',
    },
    persons: {
        '1': {
            id: '1',
            key: 'Araceli_Considine_355',
            firstName: 'Araceli',
            lastName: 'Considine',
            dateOfBirth: '1961-01-07 00:52:49',
            imageUrl: 'https://i.pravatar.cc/600?u=1',
            imageThumbUrl: 'https://i.pravatar.cc/150?u=1',
            ratio: 4,
            shortDescription: 'Laboriosam quisquam suscipit ipsum ducimus ad.',
            socialTwitterUrl: '',
            socialFacebookUrl: '',
            socialInstagramUrl: '',
            socialLinkedInUrl: '',
            items: [],
            website: '',
            pinterestUrl: '',
            phoneNumber: '987.962.3217 x407',
            wikipediaUrl: '',
            nationality: 'american',
            company: 'Brekke, Brekke and Rau',
            netWorth: 319451,
            height: 1.8,
            jobTitle: 'Industrial',
            notes: 'Dolorum quas cumque incidunt non aut et pariatur. Optio aut et soluta non quis illum dolore doloremque. Optio sapiente necessitatibus aut et rem voluptatem ex cumque. Est exercitationem quae quis magnam autem velit eum eum. Reprehenderit sed perferendis. Voluptate quia iste neque.\nVitae velit praesentium. Perspiciatis illo similique expedita voluptatem consequatur. Omnis illo a laboriosam a deleniti omnis qui nihil corporis. Quia ea et officiis. Sapiente sit mollitia eum rem officia. Quia in quaerat quos eaque praesentium sint earum.\nEt est doloribus sint unde vel quo autem qui necessitatibus. Et et omnis non rerum quidem. Suscipit aperiam fuga unde non rerum nobis quaerat expedita saepe. Sunt nihil ullam nihil doloribus voluptatem voluptatem. Dicta quis natus aut animi. Consequuntur doloremque mollitia ipsam rerum qui expedita vero.',
            email: 'Adela.Bosco29@hotmail.com',
            tags: ['actor', 'entrepreneur'],
            dataTags: ['thisWeek'],
            tier: 2,
            gender: 'female',
            category: 'global',
        },
    },
};

export const reducers = generateReducersForStore<IPplStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.persons.setAll({}));
    });
    return store;
};
