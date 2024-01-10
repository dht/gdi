import MonacoEditor, { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useEffect, useRef, useState } from 'react';
import { useMeasure } from 'react-use';
import { Wrapper } from './JsonEditor.style';
import { vs_studio_dark } from './JsonEditor.theme';

export type JsonEditorProps = {
  width?: string | number;
  height?: string | number;
  value: string;
  onChange?: (value?: string) => void;
  onBlur?: (value?: string) => void;
  autFocus?: boolean;
};

export function JsonEditor(props: JsonEditorProps) {
  const { autFocus } = props;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const [value, setValue] = useState(JSON.stringify(props.value, null, 2));
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    if (JSON.stringify(props.value, null, 1) !== value) {
      setValue(JSON.stringify(props.value, null, 2));
    }
  }, [props.value]);

  function onChange(value: string | undefined, _ev: monaco.editor.IModelContentChangedEvent) {
    try {
      const parsed = JSON.parse(value || '');
      setValue(value || '');

      if (!props.onChange) {
        return;
      }

      props.onChange(parsed);
    } catch (err) {
      console.log('err =>', err);
    }
  }

  function onEditorMount(editor: any, monaco: Monaco) {
    try {
      monaco.editor.defineTheme('light', vs_studio_dark);
      monaco.editor.setTheme('light');
    } catch (err) {
      console.log('err =>', err);
    }

    editorRef.current = editor;

    editor.onDidBlurEditorWidget(() => {
      if (!props.onBlur) {
        return;
      }

      props.onBlur(editor.getValue());
    });

    if (autFocus) {
      setTimeout(() => {
        editor.focus();
      });
    }
  }

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    fontSize: 14,
    mouseWheelScrollSensitivity: 0.2,
  };

  return (
    <Wrapper className='JsonEditor-wrapper' data-testid='JsonEditor-wrapper' ref={ref}>
      <MonacoEditor
        language='json'
        onMount={onEditorMount}
        value={value}
        theme='light'
        width={typeof width === 'number' ? width + 'px' : width}
        height={typeof height === 'number' ? height + 'px' : height}
        options={options}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default JsonEditor;
