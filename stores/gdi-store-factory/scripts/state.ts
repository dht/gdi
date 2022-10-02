import { IFactoryStore } from '../src/types';
import { articles } from './data.articles';

export const state: IFactoryStore = {
    appStateFactory: {
        stateKey: 'factory',
        mode: 'visual',
        selectedToolId: 'data',
        showItemsInTable: false,
        showPropertiesModal: false,
        isLoadingLayoutItems: false,
    },
    currentIdsFactory: {
        articleId: '1',
        layoutId: '',
        flexEntityId: '',
        widgetId: '',
        resolutionId: '',
    },
    layouts: {
        l1: {
            id: 'l1',
            name: 'two columns',
            items: [
                {
                    id: 'i1',
                    parentId: '',
                    entityType: 'container',
                    resolution: '1080p',
                    direction: 'row',
                    locationId: 'left_1',
                },
                {
                    id: 'i2',
                    parentId: 'i1',
                    entityType: 'item',
                    resolution: '1080p',
                    locationId: 'left_2',
                    order: 1,
                },
            ],
        },
    },
    articles: {
        '1': {
            id: '1',
            imageUrl: 'http://localhost:3001/images/game.webp',
            imageThumbUrl: 'http://localhost:3001/images/game.webp',
            imageDescription:
                'It has revoked server maintenance due to the issue',
            imageSource: 'Sony',
            title: 'Gran Turismo 7 has been largely unplayable for days due to server maintenance',
            authorName: 'David Mclaren',
            publishDate: '2020-10-10 10:00',
            lastPublishDate: '2020-10-10 10:00',
            lastSaveDate: '2020-10-10 10:00',
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
        },
        ...articles,
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
