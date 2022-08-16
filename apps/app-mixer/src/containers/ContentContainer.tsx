import React, { useCallback, useMemo } from 'react';
import Content from '../components/Content/Content';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { IWidgetInstance } from 'igrid/dist/dts';

export type ContentContainerProps = {
    instance: IWidgetInstance;
};

export const ContentContainer = (props: ContentContainerProps) => {
    const { instance } = props;

    const callbacks = useMemo(
        () => ({
            onSave: (data: Json) => {
                console.log('data ->', data);
                return Promise.resolve(true);
            },
        }),
        []
    );

    return <Content instance={instance} callbacks={callbacks} />;
};
