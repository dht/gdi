import React, { useCallback, useEffect } from 'react';
import ProjectSwitch from '../components/ProjectSwitch/ProjectSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { useLocalStorage } from 'react-use';

const key = 'SELECTED_PROJECT_KEY';

export const ProjectSwitchContainer = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectors.base.$projects);
    const projectKey = useSelector(selectors.base.$projectKey);
    const [localKey, setLocalKey] = useLocalStorage<string>(
        key,
        projectKey as string
    );

    const onSelect = useCallback((key: string) => {
        setLocalKey(key);
        dispatch(
            actions.currentIdsTasks.patch({
                projectKey: key,
            })
        );
    }, []);

    useEffect(() => {
        if (localKey) {
            onSelect(localKey);
        }
    }, []);

    return (
        <ProjectSwitch
            projects={projects}
            projectKey={projectKey}
            onSelect={onSelect}
        />
    );
};

export default ProjectSwitchContainer;
