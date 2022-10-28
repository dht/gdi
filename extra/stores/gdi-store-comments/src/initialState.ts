import { generateReducersForStore } from 'redux-store-generator';
import { ICommentsStore } from './types';
import { actions } from './actions';

export const initialState: ICommentsStore = {
    appStateComments: {
        stateKey: 'comments',
    },
    comments: {
        '1': {
            id: '1',
            date: '2022-02-13T16:09:44.459Z',
            title: 'Eum amet perspiciatis est dolores commodi facilis facere.',
            content:
                'Numquam deleniti sit deserunt repudiandae cum voluptas ipsam aut blanditiis. Quibusdam pariatur et sed quisquam saepe sed sunt. Reiciendis placeat eum nulla officia dignissimos eveniet quos rerum. Nam qui dolore cumque enim rerum est eligendi sed sed.',
            parentId: '05ee34e1-bbe0-44be-a80f-20ee0d39088d',
            userId: 'cacf9fa5-fd2e-4c59-b486-09edca7c5565',
            status: 'approved',
            itemType: 'product',
            itemId: 'a341a3e4-f0b2-4c33-afce-f49d8873e034',
            tags: ['celebrity'],
            dataTags: ['thisWeek'],
            upVotes: 60,
            downVotes: 38,
            items: [
                {
                    id: '1',
                    userId: '89d5d903-eb37-40a5-b924-f0fbd734dbee',
                    upVote: true,
                    downVote: false,
                },
            ],
        },
    },
    pendingComments: {
        '4': {
            id: '4',
            date: '2022-10-08T01:40:56.173Z',
            title: 'Explicabo ut officiis optio odit deserunt est provident laudantium nesciunt.',
            content:
                'Reiciendis voluptas dolor aliquam et quas optio eos. Beatae asperiores recusandae. Explicabo labore quia ex omnis culpa voluptatem atque. Vero voluptas asperiores iusto dolores. A placeat vel non debitis occaecati architecto ducimus cumque.',
            parentId: '8a95b6cc-d8b2-4e7a-9665-40326ae6b04c',
            userId: '113a69a6-ab54-4dd4-8d4a-2bbda2ea8a19',
            status: 'pending',
            itemType: 'template',
            itemId: 'a489a617-8380-4e4f-9ba2-64d0c319dac4',
            tags: ['celebrity', 'actor', 'entrepreneur'],
            dataTags: ['thisWeek'],
            upVotes: 69,
            downVotes: 33,
            items: [
                {
                    id: '1',
                    userId: 'da1fe24f-88da-4e25-9a53-f8dbf7b40cb0',
                    upVote: false,
                    downVote: true,
                },
            ],
        },
    },
};

export const reducers = generateReducersForStore<ICommentsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.pendingComments.setAll({}));
        store.dispatch(actions.comments.setAll({}));
    });
    return store;
};
