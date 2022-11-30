import React, { useMemo } from 'react';
import Projects from '../components/Projects/Projects';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const ProjectsContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectors.tables.$projects);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                // console.log('itemId ->', itemId);
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
        }),
        []
    );

    return (
        <Projects
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default ProjectsContainer;
