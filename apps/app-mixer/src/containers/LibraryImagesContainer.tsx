import { useMemo } from 'react';
import LibraryImages from '../components/LibraryImages/LibraryImages';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

type LibraryImagesContainerProps = {};

export const LibraryImagesContainer = (_props: LibraryImagesContainerProps) => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.base.$libraryImages);

    const callbacks = useMemo(
        () => ({
            onGalleryItemAction: (
                id: string,
                action: ImageActionType,
                data?: Json
            ) => {
                console.log('action ->', action);

                dispatch({
                    type: 'IMAGE_ACTION',
                    actionType: action,
                    id,
                    data,
                });
            },
            onGalleryAction: (actionId: ItemActionType, data?: Json) => {
                console.log('action ->', actionId, data);
                switch (actionId) {
                    case 'new':
                        dispatch(
                            actions.appStateMixer.patch({
                                showImageUploadModal: true,
                            })
                        );
                        break;
                }
            },
        }),
        []
    );

    return <LibraryImages items={items} callbacks={callbacks} />;
};
