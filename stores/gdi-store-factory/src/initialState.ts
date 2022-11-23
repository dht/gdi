import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IFactoryStore } from './types';
import p from '../package.json';

export const initialState: IFactoryStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateFactory: {
        stateKey: 'factory',
        mode: 'table',
        selectedToolId: 'data',
        showItemsInTable: false,
        showPropertiesModal: false,
        isLoadingLayoutItems: false,
    },
    currentIdsFactory: {
        articleId: '',
        layoutId: '',
        flexEntityId: '',
        widgetId: '',
        resolutionId: '1080p',
    },
    layouts: {
        '1': {
            id: '1',
            name: 'two columns',
            items: [
                {
                    id: '1',
                    parentId: '0',
                    entityType: 'container',
                    resolution: '1080p',
                    locationId: 'left_1',
                    order: 1,
                },
                {
                    id: '2',
                    parentId: '1',
                    entityType: 'item',
                    resolution: '1080p',
                    locationId: 'left_2',
                    order: 2,
                },
            ],
            tags: [],
        },
    },
    articles: {
        '1': {
            id: '1',
            imageUrl: 'http://localhost:3001/images/game.webp',
            imageDescription:
                'It has revoked server maintenance due to the issue',
            imageSource: 'Sony',
            title: 'Gran Turismo 7 has been largely unplayable for days due to server maintenance',
            authorName: 'David Mclaren',
            publishDate: '2020-10-10 10:00:00',
            lastPublishDate: '2020-10-10 10:00:00',
            lastSaveDate: '2020-10-10 10:00:00',
            categoryBreadcrumbs: 'games>entertainment>tech',
            comments: 3,
            content:
                'There seems to be a connectivity issue with the game after the latest patch',
            intro: 'Players go to twitter to vent frustration',
            isPublished: false,
            linkPath: 'grnd-turismo',
            slogan: '',
            status: 'draft',
            tags: [],
            minutesSpentEditing: 0,
            wordCount: 100,
            dataTags: [],
            imageThumbUrl: '',
        },
    },
    articleCategories: {
        '1': {
            id: '1',
            parentId: '',
            title: 'Tech',
        },
        '2': {
            id: '2',
            parentId: '1',
            title: 'Entertainment',
        },
        '3': {
            id: '2',
            parentId: '2',
            title: 'Gaming',
        },
    },
};

export const reducers = generateReducersForStore<IFactoryStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.articles.setAll({}));
        store.dispatch(actions.layouts.setAll({}));
    });
    return store;
};
