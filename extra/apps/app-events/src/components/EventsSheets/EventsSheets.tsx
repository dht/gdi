import React from 'react';
import { Container } from './EventsSheets.style';
import { Sheets } from '@gdi/web-ui';

export type EventsSheetsProps = {
    dispatch: (action: Action) => void;
    nodes: INodeWithColor[];
    sheetConfig: IFormConfig | null;
    sheetData: Json[];
    confirm: (promptRequest: any) => Promise<{ didCancel: boolean }>;
    onSelectNode: (nodeId: string) => void;
    currentNodeId: string;
};

export function EventsSheets(props: EventsSheetsProps) {
    return (
        <Container
            className='EventsSheets-container'
            data-testid='EventsSheets-container'
        >
            <Sheets {...props} />
        </Container>
    );
}

export default EventsSheets;
