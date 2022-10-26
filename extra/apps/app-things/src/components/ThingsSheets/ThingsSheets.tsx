import React from 'react';
import { Container } from './ThingsSheets.style';
import { Sheets } from '@gdi/web-ui';

export type ThingsSheetsProps = {
    dispatch: (action: Action) => void;
    nodes: INodeWithColor[];
    sheetConfig: IFormConfig | null;
    sheetData: Json[];
    confirm: (promptRequest: any) => Promise<{ didCancel: boolean }>;
    onSelectNode: (nodeId: string) => void;
    currentNodeId: string;
};

export function ThingsSheets(props: ThingsSheetsProps) {
    return (
        <Container
            className='ThingsSheets-container'
            data-testid='ThingsSheets-container'
        >
            <Sheets {...props} />
        </Container>
    );
}

export default ThingsSheets;
