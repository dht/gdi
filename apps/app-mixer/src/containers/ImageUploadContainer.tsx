import React, { useMemo } from 'react';
import { ImageUpload } from '../components/ImageUpload/ImageUpload';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { firebase } from '@gdi/platformer';

type ImageUploadContainerProps = {
    onClose: () => void;
};

export const ImageUploadContainer = (props: ImageUploadContainerProps) => {
    const dispatch = useDispatch();
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onUpload: async (file: File, imageId: string) => {
                const ext = file.name.split('.').pop();
                const path = `uploads/${imageId}.${ext}`;
                return firebase.uploadImage(path, file);
            },
            onSave: async (_change: Json, allData: Json) => {
                const {
                    title = '',
                    imageUrl: rawImageUrl = '',
                    tags = [],
                    ratio,
                    imageId,
                } = allData;

                // optimistic
                props.onClose();

                const { imageUrl, imageThumbUrl } = rawImageUrlToUrls(
                    rawImageUrl,
                    imageId
                );

                await dispatch(
                    actions.libraryImages.add({
                        id: imageId,
                        title,
                        tags,
                        imageUrl,
                        imageThumbUrl,
                        ratio: parseFloat(ratio),
                    })
                );

                return Promise.resolve(true);
            },
        }),
        [allOptions]
    );

    return <ImageUpload allOptions={allOptions} callbacks={callbacks} />;
};

export const rawImageUrlToUrls = (rawImageUrl: string, imageId: string) => {
    const parts = rawImageUrl.split('/');
    parts.pop();
    parts.push('libraryImages');

    const base = parts.join('/') + encodeURIComponent('/');

    const imageUrl = [base, `${imageId}.webp?alt=media`].join('');
    const imageThumbUrl = [base, `${imageId}_thumb.webp?alt=media`].join('');

    return {
        imageUrl,
        imageThumbUrl,
    };
};
