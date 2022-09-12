import React, { useMemo } from 'react';
import Layouts from '../components/Layouts/Layouts';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { definitions } from '../components/Layouts/definitions';

export const LayoutsContainer = () => {
    const data = {
        main: [],
        sub: [],
    };

    const callbacks = useMemo(
        () => ({
            main: {
                onSave: (id: string, item: any) => {},
                onNew: (data: Json) => {},
                onDelete: (id: string) => {},
            },
            sub: {
                onSave: (id: string, item: any) => {},
                onNew: (data: Json) => {},
                onDelete: (id: string) => {},
            },
        }),
        []
    );

    return <Layouts {...definitions} data={data} callbacks={callbacks} />;
};
