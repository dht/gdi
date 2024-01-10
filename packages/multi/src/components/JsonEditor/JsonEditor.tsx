import MonacoEditor, { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useMeasure } from 'react-use';
import { Wrapper } from './JsonEditor.style';
import { vs_blue } from './JsonEditor.theme';

export type JsonEditorProps = {
  width?: string | number;
  height?: string | number;
  value: string;
};

export function JsonEditor(props: JsonEditorProps) {
  const { value } = props;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  function onChange(value: string | undefined, _ev: monaco.editor.IModelContentChangedEvent) {
    // props.onChange(value);
  }

  function onEditorMount(editor: any, monaco: Monaco) {
    monaco.editor.defineTheme('blue', vs_blue);
    monaco.editor.setTheme('blue');

    setTimeout(() => {
      editor.focus();
    });
  }

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    fontSize: 16,
    mouseWheelScrollSensitivity: 0.2,
  };

  return (
    <Wrapper className='JsonEditor-wrapper' data-testid='JsonEditor-wrapper' ref={ref}>
      <MonacoEditor
        language='json'
        onMount={onEditorMount}
        theme='blue'
        value={value}
        width={typeof width === 'number' ? width + 'px' : width}
        height={typeof height === 'number' ? height + 'px' : height}
        options={options}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default JsonEditor;
