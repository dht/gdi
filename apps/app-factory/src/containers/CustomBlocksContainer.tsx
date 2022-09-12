import React from 'react';
import CustomBlocks from '../components/CustomBlocks/CustomBlocks';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const CustomBlocksContainer = () => {
    return <CustomBlocks />;
};
