import React from 'react';
import { Container } from './KnowledgeSheets.style';
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
        <Container
            className='KnowledgeSheets-container'
            data-testid='KnowledgeSheets-container'
        >
            <Sheets {...props} />
        </Container>
    );
}

export default KnowledgeSheets;
