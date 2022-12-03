import React from 'react';
import { Wrapper } from './KnowledgeSheets.style';
import { Sheets } from '@gdi/web-ui';

export type KnowledgeSheetsProps = {
    dispatch: (action: Action) => void;
    nodes: INodeWithColor[];
    sheetConfig: IFormConfig | null;
    sheetData: Json[];
    confirm: (promptRequest: any) => Promise<{ didCancel: boolean }>;
    onSelectNode: (nodeId: string) => void;
    currentNodeId: string;
};

export function KnowledgeSheets(props: KnowledgeSheetsProps) {
    return (
        <Wrapper
            className='KnowledgeSheets-wrapper'
            data-testid='KnowledgeSheets-wrapper'
        >
            <Sheets {...props} />
        </Wrapper>
    );
}

export default KnowledgeSheets;
