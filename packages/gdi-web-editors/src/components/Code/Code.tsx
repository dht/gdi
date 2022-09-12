import React, { useState } from 'react';
import { Container } from './Code.style';
import MonacoEditor, { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export type CodeProps = {};

export function Code(props: CodeProps) {
    const [code, setCode] = useState('');

    function onEditorMount(editor: any, monaco: Monaco) {
        var schema1 = {
            uri: 'http://myserver/foo-schema.json', // id of the first schema
            fileMatch: ['*'],
            schema: {
                type: 'object',
                properties: {
                    p1: {
                        enum: ['v1', 'v2'],
                    },
                },
            },
        };

        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [schema1],
        });
    }

    function onChange(
        value: string | undefined,
        ev: monaco.editor.IModelContentChangedEvent
    ) {
        console.log('onChange', ev, value);
    }

    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
        selectOnLineNumbers: true,
        fontSize: 16,
    };

    return (
        <Container className='Code-container' data-testid='Code-container'>
            <MonacoEditor
                defaultLanguage='json'
                height='90vh'
                onMount={onEditorMount}
                theme='vs-dark'
                value={code}
                options={options}
                onChange={onChange}
            />
        </Container>
    );
}

export default Code;
