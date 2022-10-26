import React from 'react';
import { EventsSheets } from '../components/EventsSheets/EventsSheets';
import {
    allConfigs,
    nodes,
} from '../components/EventsSheets/EventsSheets.config';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { prompt } from '@gdi/web-ui';

export const EventsSheetsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawEventsState);
    const sheetData = useSelector(selectors.base.$sheetData);

    const { currentNodeId } = appState;

    const sheetConfig = allConfigs[currentNodeId];

    function onSelectNode(nodeId: string) {
        dispatch(
            actions.appStateEvents.patch({
                currentNodeId: nodeId,
            })
        );
    }

    return (
        <EventsSheets
            dispatch={dispatch}
            nodes={nodes}
            sheetConfig={sheetConfig}
            sheetData={sheetData}
            confirm={prompt.confirm}
            currentNodeId={currentNodeId}
            onSelectNode={onSelectNode}
        />
    );
};
