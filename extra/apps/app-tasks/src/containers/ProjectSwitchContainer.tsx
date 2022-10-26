import React, { useMemo } from 'react';
import ProjectSwitch from '../components/ProjectSwitch/ProjectSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const ProjectSwitchContainer = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectors.base.$projects);
    const projectKey = useSelector(selectors.base.$projectKey);

    const callbacks = useMemo(
        () => ({
            onSelect: (projectKey: string) => {
                dispatch(
                    actions.currentIdsTasks.patch({
                        projectKey,
                    })
                );
            },
        }),
        []
    );

    return (
        <ProjectSwitch
            projects={projects}
            projectKey={projectKey}
            onSelect={callbacks.onSelect}
        />
    );
};
