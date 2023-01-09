import React from 'react';
import Resolutions from '../components/Resolutions/Resolutions';
import { resolutions } from '../components/Resolutions/Resolutions.data';

export const ResolutionsContainer = () => {
    return <Resolutions data={resolutions} />;
};

export default ResolutionsContainer;
