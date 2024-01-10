import { CollectionNode } from './types/types';

export const isCollectionNodeBlank = (collectionNode: CollectionNode) => {
    const values = Object.values(collectionNode);

    if (values.length > 1) {
        return false;
    }

    const fields = Object.keys(values[0]);
    return fields.length === 1 && fields[0] === 'id';
};
