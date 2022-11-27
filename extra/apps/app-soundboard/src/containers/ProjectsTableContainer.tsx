import ProjectsTable from '../components/ProjectsTable/ProjectsTable';
import React, { useCallback } from 'react';
import { actions, actionsTasks, selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const ProjectsTableContainer = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectors.base.$projectsTable);

    const onProjectClick = useCallback((project: IProject) => {
        const { key } = project;

        dispatch(
            actions.currentIdsSoundboard.patch({
                projectKey: key,
            })
        );
    }, []);

    const onColorChange = useCallback((project: IProject, newColor: string) => {
        dispatch(
            actionsTasks.projects.patch(project.id, {
                color: newColor,
            })
        );
    }, []);

    return (
        <ProjectsTable
            projects={projects}
            onProjectClick={onProjectClick}
            onColorChange={onColorChange}
        />
    );
};

export default ProjectsTableContainer;
