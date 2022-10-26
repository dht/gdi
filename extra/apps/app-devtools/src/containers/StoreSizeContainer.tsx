import React, { useMemo } from 'react';
import StoreSize from '../components/StoreSize/StoreSize';
import { useSelector } from 'react-redux';

export type StoreSizeProps = {};

const $i = (state: any) => state;

export function StoreSizeContainer(_props: StoreSizeProps) {
    const state = useSelector($i);
    const sizeInBytes = useMemo(() => JSON.stringify(state).length, [state]);

    return <StoreSize sizeInBytes={sizeInBytes} />;
}

export default StoreSizeContainer;
