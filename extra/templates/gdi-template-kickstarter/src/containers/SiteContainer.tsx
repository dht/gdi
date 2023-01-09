import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageContainer } from './PageContainer';
import { ResolutionsContainer } from './ResolutionsContainer';

export const SiteContainer = () => {
    return (
        <Routes>
            <Route path='/' element={<PageContainer />} />
            <Route path='/resolutions' element={<ResolutionsContainer />} />
        </Routes>
    );
};
