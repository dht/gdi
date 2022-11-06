export const itemStructure = `export type IComment = {
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
`;
