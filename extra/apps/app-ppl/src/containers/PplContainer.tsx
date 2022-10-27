import React, { useMemo } from 'react';
import Ppl from '../components/Ppl/Ppl';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { guid4, invokeEvent } from 'shared-base';
import { firebase } from '@gdi/platformer';
import { prompt } from '@gdi/web-base-ui';

export const PplContainer = () => {
    const dispatch = useDispatch();
    const ppl = useSelector(selectors.tables.$ppl);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: async (itemId: string, point?: Json) => {
                const { didCancel, value } = await prompt.pie({
                    options: items,
                    point,
                });

                if (didCancel) {
                    return;
                }

                const type = ['ITEM_ACTION', 'person', value.id]
                    .join('_')
                    .toUpperCase();

                dispatch({
                    type,
                    itemId,
                });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
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
            dispatch={dispatch}
        />
    );
};

export const items: IOption[] = [
    {
        id: 'newSale',
        iconName: 'AutoEnhanceOn',
        text: 'new Sale',
        shortKey: {
            key: 's',
        },
    },
    {
        id: 'newSaleAction',
        iconName: 'LightningBolt',
        text: 'add sale Action',
        shortKey: {
            key: 'a',
        },
    },

    {
        id: 'mail',
        iconName: 'Mail',
        text: 'Email',
        shortKey: {
            key: 'e',
        },
    },
    {
        id: 'phone',
        iconName: 'Phone',
        text: 'Call',
        shortKey: {
            key: 'c',
        },
    },
    {
        id: 'newTicket',
        iconName: 'TaskLogo',
        text: 'add Ticket',
        shortKey: {
            key: 't',
        },
    },
    {
        id: 'whatsapp',
        iconName: 'OfficeChat',
        text: 'send Whatsapp',
        shortKey: {
            key: 'w',
        },
    },
    {
        id: 'editNote',
        iconName: 'EditNote',
        text: 'add Note',
        shortKey: {
            key: 'n',
        },
    },
];
