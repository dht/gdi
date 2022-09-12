import React from 'react';
import { Container } from './JsonEditor.style';

export type JsonEditorProps = {
    config: IFormConfig;
    data: Json;
    allOptions?: Json;
    onSave: (change: Json, allData: Json) => Promise<boolean>;
    onChange?: (change: Json) => void;
};

export function JsonEditor(_props: JsonEditorProps) {
    return (
        <Container
            className='JsonEditor-container'
            data-testid='JsonEditor-container'
        >
            JsonEditor
        </Container>
    );
}

export default JsonEditor;
