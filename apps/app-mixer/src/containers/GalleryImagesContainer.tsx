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
        selectionMode: 'none',
    };

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {},
            onSelectionChange: (ids: string[]) => {
                dispatch({
                    type: 'SWITCH_IMAGE_ACTION',
                    imageId: ids[0],
                });
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <GalleryImages
            // galleryOptions={galleryOptions}
            data={data}
            callbacks={callbacks}
            dispatch={dispatch}
        />
    );
};

export default GalleryImagesContainer;
