import React, { useCallback, useMemo } from 'react';
import Gallery from '../components/Gallery/Gallery';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const GalleryContainer = () => {
    const dispatch = useDispatch();
    const instance = useSelector(selectors.base.$content);

    const callbacks = useMemo(
        () => ({
            onSearch: (q: string) => {
                console.log('q ->', q);
            },
            onUploadImage: (file: File) => {
                console.log('file ->', file);
            },
            onDeleteImage: (id: string) => {},
            onAddTagToImage: (id: string, tag: string) => {},
            onRemoveTagFromImage: (id: string, tag: string) => {},
        }),
        []
    );

    if (!instance) {
        // return null;
    }

    return <Gallery callbacks={callbacks} />;
};
