import React from 'react';
import { Wrapper, Content } from './Sheets.style';
import { Sheet } from '../Sheet/Sheet';
import { VerticalTabs } from '../VerticalTabs/VerticalTabs';

export type SheetsProps = {
    selectedNodeId: string;
    nodes: INodeWithColor[];
    sheetConfig: IFormConfig | null;
    sheetData: Json[];
    callbacks: {
        onChange: (itemId: string, change: Json) => void;
        onSelectNode: (nodeId: string) => void;
        onDelete: (itemId: string) => void;
        onNew: (data: Json) => void;
    };
};

export function Sheets(props: SheetsProps) {
    const { selectedNodeId, sheetConfig, sheetData, nodes, callbacks } = props;

    function renderSheet() {
        if (!sheetConfig) {
            return null;
        }

        return (
            <Sheet
                config={sheetConfig}
                data={sheetData}
                allOptions={{}}
                onChange={callbacks.onChange}
                onDelete={callbacks.onDelete}
                onNew={callbacks.onNew}
            />
        );
    }

    return (
        <Wrapper className='Sheets-wrapper' data-testid='Sheets-wrapper'>
            <VerticalTabs
                selectedNodeId={selectedNodeId}
                onSelectNode={callbacks.onSelectNode}
                nodes={nodes}
            />
            <Content>{renderSheet()}</Content>
        </Wrapper>
    );
}

export default Sheets;
