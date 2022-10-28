export type ICommentsStore = {
    appStateComments: ICommentsState;
    pendingComments: IComments;
    comments: IComments;
};

export type ICommentsState = {
    stateKey: string;
};

export type ICommentStatus = 'pending' | 'approved' | 'rejected';

export type IComment = {
    id: string;
    date: string;
    title: string;
    content: string;
    parentId: string;
    userId?: string;
    status: ICommentStatus;
    itemType: ItemType;
    itemId: string;
    tags: string[];
    dataTags: string[];
    upVotes: number;
    downVotes: number;
    items: ICommentFeedback[];
};

export type IComments = Record<string, IComment>;

export type ICommentFeedback = {
    id: string;
    userId: string;
    upVote: boolean;
    downVote: boolean;
};
