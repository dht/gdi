import React from 'react';
import ProjectsTiles from '../ProjectsTiles/ProjectsTiles';
import TicketsTable from '../TicketsTable/TicketsTable';
import { Wrapper, Header, Link } from './TicketsByProject.style';

export type TicketsByProjectProps = {
    projects: IProjects;
    projectKey: string;
    selector: any;
    emptyMessage: string;
    callbacks: {
        navigateToAllProjects: () => void;
        onTileClick: (projectId: string) => void;
    };
};

export function TicketsByProject(props: TicketsByProjectProps) {
    const { projects, projectKey, selector, emptyMessage, callbacks } = props;

    function renderHeader() {
        return (
            <Header>
                <Link onClick={callbacks.navigateToAllProjects}>
                    All projects
                </Link>
            </Header>
        );
    }

    return (
        <Wrapper
            className='TicketsByProject-wrapper'
            data-testid='TicketsByProject-wrapper'
        >
            {projectKey ? (
                <TicketsTable
                    height={420}
                    itemHeight={40}
                    selector={selector}
                    emptyMessage={emptyMessage}
                    renderHeader={renderHeader}
                />
            ) : (
                <ProjectsTiles
                    projects={projects}
                    onTileClick={callbacks.onTileClick}
                />
            )}
        </Wrapper>
    );
}

export default TicketsByProject;
