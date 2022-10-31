import React from 'react';
import {
    Container,
    Project,
    ProjectKey,
    ProjectTitle,
} from './ProjectSwitch.style';
import classnames from 'classnames';

export type ProjectSwitchProps = {
    projects: IProjects;
    projectKey?: string;
    onSelect: (projectKey: string) => void;
};

export function ProjectSwitch(props: ProjectSwitchProps) {
    const { projects, projectKey } = props;

    function renderProject(project: IProject) {
        const { id, key, name } = project;

        const className = classnames('project', {
            selected: key === projectKey,
        });

        return (
            <Project
                title={name}
                key={id}
                className={className}
                onTouchStart={() => props.onSelect(key)}
                onMouseDown={() => props.onSelect(key)}
            >
                <ProjectKey>{key}</ProjectKey>
                <ProjectTitle>{name}</ProjectTitle>
            </Project>
        );
    }

    function renderProjects() {
        return Object.values(projects).map((project: IProject) =>
            renderProject(project)
        );
    }

    return (
        <Container
            className='ProjectSwitch-container'
            data-testid='ProjectSwitch-container'
        >
            {renderProject({
                id: 'all',
                key: 'ALL',
                name: 'All projects',
            })}
            {renderProjects()}
        </Container>
    );
}

export default ProjectSwitch;
