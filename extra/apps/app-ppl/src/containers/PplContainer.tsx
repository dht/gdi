import React, { useMemo } from 'react';
import Ppl from '../components/Ppl/Ppl';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { guid4, invokeEvent } from 'shared-base';
import { firebase } from '@gdi/platformer';
import { prompt } from '@gdi/web-base-ui';
import { useLanguage } from '@gdi/language';

export const PplContainer = () => {
    const dispatch = useDispatch();
    const ppl = useSelector(selectors.tables.$ppl);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: async (itemId: string) => {},
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
        }),
        []
    );

    const allMethods = useMemo(
        () => ({
            onUpload: async (file: File, extraData: Json = {}) => {
                const id = extraData.itemId || guid4();
                const ext = file.name.split('.').pop();
                const path = `uploads/person_${id}.${ext}`;
                return firebase.uploadImage(path, file);
            },
        }),
        []
    );

    return (
        <Ppl
            data={ppl}
            callbacks={callbacks}
            allOptions={allOptions}
            allMethods={allMethods}
            tags={allOptions.$pplTags}
            dispatch={dispatch}
        />
    );
};
