import React, { useMemo } from 'react';
import TicketsByProject from '../components/TicketsByProject/TicketsByProject';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const TicketsByProjectContainer = () => {
    const projects = useSelector(selectors.tables.$projects);
    const projectKey = useSelector(selectors.base.$projectKey);
    const selector = selectors.tables.$tickets;

    const callbacks = useMemo(
        () => ({
            navigateToAllProjects: () => {},
            onTileClick: (projectId: string) => {},
        }),
        []
    );

    return (
        <TicketsByProject
            projects={projects}
            selector={selector}
            emptyMessage='No tickets'
            projectKey={projectKey}
            callbacks={callbacks}
        />
    );
};

export default TicketsByProjectContainer;
