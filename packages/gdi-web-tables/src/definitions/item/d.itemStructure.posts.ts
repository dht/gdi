export const itemStructure = `export type IPost = {
    id: string;
    postDate: string;
    postType: 'textual' | 'video';
    content: string;
    authorId: string;
    authorName: string;
    authorImageUrl?: string;
    isObfuscated: boolean;
    sourceId: 'youtube' | 'facebook' | 'twitter' | 'other';
    sourceUrl: string;
    tags: string[];
    items: IPostComments[];
};
`;
