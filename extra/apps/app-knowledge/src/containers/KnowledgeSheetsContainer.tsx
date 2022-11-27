import React from 'react';
import { KnowledgeSheets } from '../components/KnowledgeSheets/KnowledgeSheets';
import {
    allConfigs,
    nodes,
} from '../components/KnowledgeSheets/KnowledgeSheets.config';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { prompt } from '@gdi/web-ui';

export const KnowledgeSheetsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawKnowledgeState);
    const sheetData = useSelector(selectors.base.$sheetData);

    const { currentNodeId } = appState;

    const sheetConfig = allConfigs[currentNodeId];

    function onSelectNode(nodeId: string) {
        dispatch(
            actions.appStateKnowledge.patch({
                currentNodeId: nodeId,
            })
        );
    }

    return (
        <KnowledgeSheets
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

export default KnowledgeSheetsContainer;
