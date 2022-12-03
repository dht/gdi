import React, { useRef, useState } from 'react';
import { Wrapper } from './Code.style';
import MonacoEditor, { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { vs_blue } from './Code.theme';

export type CodeProps = {
    value?: string;
    onChange: (value?: string) => void;
    height: string | number;
    schema?: Schema | Schema[];
    language: 'json' | 'typescript' | 'markdown';
    hideLineNumbers: boolean;
    readOnly?: boolean;
};

export type Schema = {
    uri: string;
    fileMatch?: string[];
    schema?: Json;
};

export function Code(props: CodeProps) {
    const {
        value,
        height,
        schema,
        language = 'json',
        hideLineNumbers,
        readOnly,
    } = props;

    function onEditorMount(editor: any, monaco: Monaco) {
        monaco.editor.defineTheme('blue', vs_blue);
        monaco.editor.setTheme('blue');

        if (schema) {
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                validate: true,
                schemas: Array.isArray(schema) ? schema : [schema],
            });
        }

        if (readOnly) {
            editor.updateOptions({ readOnly });
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
        lineNumbers: hideLineNumbers ? 'off' : 'on',
    };

    return (
        <Wrapper className='Code-wrapper' data-testid='Code-wrapper'>
            <MonacoEditor
                language={language}
                onMount={onEditorMount}
                theme='blue'
                defaultValue={value}
                value={value}
                height={typeof height === 'number' ? height + 'px' : height}
                options={options}
                onChange={onChange}
            />
        </Wrapper>
    );
}

export default Code;
