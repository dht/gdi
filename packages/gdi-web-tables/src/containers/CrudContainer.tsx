import React, { useMemo } from 'react';
import Crud from '../components/Crud/Crud';
import { useSelector, useDispatch } from 'react-redux';
import { ICrudDefinitions, ITableConfig } from '../types';

export type CrudContainerProps = ICrudDefinitions & {
    data: {
        main: Json;
        sub?: Json;
    };
    callbacks: {
        main: {
            onSave: (id: string, data: Json) => void;
            onNew: (data: Json) => void;
            onDelete: (id: string) => void;
        };
        sub?: {
            onSave: (id: string, data: Json) => void;
            onNew: (data: Json) => void;
            onDelete: (id: string) => void;
        };
    };
};

export const CrudContainer = (props: CrudContainerProps) => {
    const callbacks = useMemo(
        () => ({
            main: {
                onSave: (id: string, data: Json) => {},
                onNew: (data: Json) => {},
                onDelete: (id: string) => {},
            },
            sub: {
                onSave: (id: string, data: Json) => {},
                onNew: (data: Json) => {},
                onDelete: (id: string) => {},
            },
        }),
        []
    );

    return <Crud {...props} {...callbacks} />;
};
