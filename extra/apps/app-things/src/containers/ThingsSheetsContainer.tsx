import React from 'react';
import { ThingsSheets } from '../components/ThingsSheets/ThingsSheets';
import {
    allConfigs,
    nodes,
} from '../components/ThingsSheets/ThingsSheets.config';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { prompt } from '@gdi/web-ui';

export const ThingsSheetsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawThingsState);
    const sheetData = useSelector(selectors.base.$sheetData);

    const { currentNodeId } = appState;

    const sheetConfig = allConfigs[currentNodeId];

    function onSelectNode(nodeId: string) {
        dispatch(
            actions.appStateThings.patch({
                currentNodeId: nodeId,
            })
        );
    }

    return (
        <ThingsSheets
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

export default ThingsSheetsContainer;
