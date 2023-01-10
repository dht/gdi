import React, { useMemo } from 'react';
import Blkr from '../components/Blkr/Blkr';

export type BlkrContainerProps = {
    paddingLeft?: number;
};

export const BlkrContainer = (props: BlkrContainerProps) => {
    const { paddingLeft } = props;

    return <Blkr paddingLeft={paddingLeft} />;
};
