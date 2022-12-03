import React from 'react';
import { Wrapper } from './JsonEditor.style';

export type JsonEditorProps = {
    config: IFormConfig;
    data: Json;
    allOptions?: Json;
    onSave: (change: Json, allData: Json) => Promise<boolean>;
    onChange?: (change: Json) => void;
};

export function JsonEditor(_props: JsonEditorProps) {
    return (
        <Wrapper
            className='JsonEditor-wrapper'
            data-testid='JsonEditor-wrapper'
        >
            JsonEditor
        </Wrapper>
    );
}

export default JsonEditor;
