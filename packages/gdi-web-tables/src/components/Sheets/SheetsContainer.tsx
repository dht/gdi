import React, { useMemo } from 'react';
import { guid4 } from 'shared-base';
import { Sheets } from './Sheets';

type SheetsContainerProps = {
    dispatch: (action: Action) => void;
    nodes: INodeWithColor[];
    sheetConfig: IFormConfig | null;
    sheetData: Json[];
    confirm: (promptRequest: any) => Promise<{ didCancel: boolean }>;
    onSelectNode: (nodeId: string) => void;
    currentNodeId: string;
};

export const SheetsContainer = (props: SheetsContainerProps) => {
    const { currentNodeId, nodes, sheetConfig, sheetData } = props;

    const callbacks = useMemo(
        () => ({
            onChange: (itemId: string, change: Json) => {
                const actionType = nodeNameToActionType('PATCH', currentNodeId);

                props.dispatch({
                    type: actionType,
                    id: itemId,
                    payload: change,
                });
            },
            onSelectNode: (nodeId: string) => {
                props.onSelectNode(nodeId);
            },
            onDelete: async (itemId: string) => {
                const { didCancel } = await props.confirm({
                    title: 'Delete item',
                    description: 'Are you sure you want to delete this item?',
                    submitButtonText: "I'm sure",
                });

                if (didCancel) {
                    return;
                }

                const actionType = nodeNameToActionType(
                    'DELETE',
                    currentNodeId
                );

                props.dispatch({
                    type: actionType,
                    id: itemId,
                });
            },
            onNew: (data: Json) => {
                const actionType = nodeNameToActionType('ADD', currentNodeId);

                props.dispatch({
                    type: actionType,
                    payload: {
                        id: guid4(),
                        ...data,
                    },
                });
            },
        }),
        [currentNodeId]
    );

    return (
        <Sheets
            selectedNodeId={currentNodeId}
            nodes={nodes}
            sheetConfig={sheetConfig}
            sheetData={sheetData}
            callbacks={callbacks}
        />
    );
};

export const nodeNameToActionType = (verb: string, nodeName: string) => {
    const singular = nodeName //
        .replace(/ies$/g, 'y')
        .replace(/e?s$/g, '');

    return `${verb}_${singular.toUpperCase()}`;
};
