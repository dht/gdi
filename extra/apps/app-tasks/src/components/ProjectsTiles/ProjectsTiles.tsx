import React from 'react';
import { Wrapper, Tile } from './ProjectsTiles.style';

export type ProjectsTilesProps = {
    projects: IProjects;
    onTileClick: (projectId: string) => void;
};

export function ProjectsTiles(props: ProjectsTilesProps) {
    const { projects } = props;

    return (
        <Wrapper className='ProjectsTiles-wrapper'>
            {Object.values(projects).map((project) => (
                <ProjectTile
                    key={project.id}
                    project={project}
                    onClick={props.onTileClick}
                />
            ))}
        </Wrapper>
    );
}

function ProjectTile(props: any) {
    const { project } = props;

    if (!project) {
        return null;
    }

    const { key } = project;

    function onClick() {
        props.onClick(key);
    }

    return <Tile onClick={onClick}>{key}</Tile>;
}

export default ProjectsTiles;
