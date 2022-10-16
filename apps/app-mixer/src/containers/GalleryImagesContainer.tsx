import { useMemo } from 'react';
import GalleryImages from '../components/GalleryImages/GalleryImages';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

type GalleyImagesContainerProps = {};

export const GalleryImagesContainer = (_props: GalleyImagesContainerProps) => {
    const dispatch = useDispatch();
    const data = useSelector(selectors.base.$libraryImages);

    const galleryOptions: IGalleryOptions = {
        columns: 5,
        selectionMode: 'browse',
    };

    const callbacks = useMemo(
        () => ({
            onItemAction: (id: string, action: string, data?: Json) => {
                dispatch({
                    type: 'IMAGE_ACTION',
                    actionType: action,
                    id,
                    data,
                });
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'selection':
                        dispatch(
                            actions.appStateMixer.patch({
                                showImageUploadModal: true,
                            })
                        );
                        break;
                }
            },
            onSelectionChange: (ids: string[]) => {
                dispatch({
                    type: 'SWITCH_IMAGE_ACTION',
                    imageId: ids[0],
                });
            },
        }),
        []
    );

    return (
        <GalleryImages
            galleryOptions={galleryOptions}
            data={data}
            callbacks={callbacks}
        />
    );
};
