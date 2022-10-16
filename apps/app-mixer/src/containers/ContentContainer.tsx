import React, { useCallback, useContext, useMemo } from 'react';
import Content from '../components/Content/Content';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export type ContentContainerProps = {
    element?: IWidgetInstance;
    formConfig?: IFormConfig;
    formData: Json;
    formOptions: Json;
};

export const ContentContainer = (props: ContentContainerProps) => {
    const dispatch = useDispatch();
    const { element, formConfig, formData, formOptions } = props;

    const callbacks = useMemo(
        () => ({
            onSave: (change: Json, _allData: Json) => {
                if (!element) {
                    console.log('no element ->');
                    return Promise.resolve(true);
                }

                if (Object.keys(change).length > 0) {
                    dispatch(
                        actions.libraryInstancesProps.patch(element.id, {
                            ...change,
                        })
                    );
                }

                dispatch(
                    actions.currentIds.patch({
                        contentInstanceId: '',
                    })
                );

                return Promise.resolve(true);
            },
        }),
        [element]
    );

    if (!formConfig) {
        return null;
    }

    return (
        <Content
            formConfig={formConfig}
            formData={formData}
            formOptions={formOptions}
            callbacks={callbacks}
        />
    );
};
