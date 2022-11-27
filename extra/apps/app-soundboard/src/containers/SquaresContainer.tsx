import React from 'react';
import Squares from '../components/Squares/Squares';
import { useSelector } from 'react-redux';
import { selectors } from '../store';
import { SoundboardContextProvider } from '../context/SoundboardContext';

export const SquaresContainer = () => {
    const weeks = useSelector(selectors.base.$weeks);
    const expectedManasByProject = useSelector(
        selectors.base.$expectedManasByProject
    );

    return (
        <SoundboardContextProvider>
            <Squares
                weeks={weeks}
                expectedManasByProject={expectedManasByProject}
            />
        </SoundboardContextProvider>
    );
};

export default SquaresContainer;
