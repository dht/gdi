import React from 'react';
import { Wrapper } from './ThingsSheets.style';
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
        <Wrapper
            className='ThingsSheets-wrapper'
            data-testid='ThingsSheets-wrapper'
        >
            <Sheets {...props} />
        </Wrapper>
    );
}

export default ThingsSheets;
