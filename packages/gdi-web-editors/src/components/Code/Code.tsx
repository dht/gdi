import React, { useRef, useState } from 'react';
import { Container } from './Code.style';
import MonacoEditor, { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export type CodeProps = {
    value?: string;
    onChange: (value?: string) => void;
    height: string | number;
    schema?: Schema | Schema[];
};

export type Schema = {
    uri: string;
    fileMatch?: string[];
    schema?: Json;
};

export function Code(props: CodeProps) {
    const { value, height, schema } = props;

    function onEditorMount(editor: any, monaco: Monaco) {
        if (schema) {
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                validate: true,
                schemas: Array.isArray(schema) ? schema : [schema],
            });
        }

        setTimeout(() => {
            editor.focus();
        });
    }

    function onChange(
        value: string | undefined,
        _ev: monaco.editor.IModelContentChangedEvent
    ) {
        props.onChange(value);
    }

    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
        selectOnLineNumbers: true,
        fontSize: 16,
    };

    return (
        <Container className='Code-container' data-testid='Code-container'>
            <MonacoEditor
                defaultLanguage='json'
                onMount={onEditorMount}
                theme='vs-dark'
                defaultValue={value}
                height={typeof height === 'number' ? height + 'px' : height}
                options={options}
                onChange={onChange}
            />
        </Container>
    );
}

export default Code;
