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

    return <LibraryImages items={items} callbacks={callbacks} />;
};
