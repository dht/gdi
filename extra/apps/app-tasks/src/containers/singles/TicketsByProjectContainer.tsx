import * as React from 'react';
import TicketsByProject from '../../components/TicketsByProject/TicketsByProject';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../store';
import { useCallbacks } from '../../hooks/useCallbacks';

export const TicketsByProjectContainer = () => {
    const dispatch = useDispatch();
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const projects = useSelector(selectors.raw.$rawProjects);
    const { projectKey } = currentIds;
    const selector = selectors.tables.$tickets;

    const emptyMessage = `No tickets in ${projectKey}`;

    const callbacks = useCallbacks({
        navigateToAllProjects: () => {
            dispatch(
                actions.currentIdsTasks.patch({
                    projectId: '',
                })
            );
        },
        onTileClick: (projectKey: string) => {
            dispatch(
                actions.currentIdsTasks.patch({
                    projectId: projectKey,
                })
            );
        },
    });

    return (
        <TicketsByProject
            projects={projects}
            projectKey={projectKey}
            selector={selector}
            emptyMessage={emptyMessage}
            callbacks={callbacks}
        />
    );
};
