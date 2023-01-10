import React from 'react';
import BlkrGallery from '../components/BlkrGallery/BlkrGallery';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const BlkrGalleryContainer = () => {
    return <BlkrGallery />;
};

export default BlkrGalleryContainer;
