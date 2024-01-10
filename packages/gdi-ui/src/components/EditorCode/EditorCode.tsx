import MonacoEditor, { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { downloadJson } from 'shared-base';
import { Icon } from '../Icon/Icon';
import { toast } from '../Toast/Toast.actions';
import { Action, Actions, Wrapper } from './EditorCode.style';
import { vs_blue } from './EditorCode.theme';
import { Schema } from './EditorCode.types';
import { prepareSchema } from './EditorCode.utils';
import { isMobile } from '../../utils/mobile';

export type EditorCodeProps = {
  value?: string;
  onChange: (value?: string) => void;
  width?: string | number;
  height?: string | number;
  schema?: Schema | Schema[];
  language: 'json' | 'typescript' | 'markdown';
  hideLineNumbers?: boolean;
  actions?: EditorAction[];
  downloadFileName?: string;
  readOnly?: boolean;
  onAction?: (action: EditorAction) => void;
};

export type EditorAction = 'content_copy' | 'download' | 'code';

export function EditorCode(props: EditorCodeProps) {
  const {
    value,
    width,
    height,
    schema,
    language = 'json',
    hideLineNumbers,
    actions = [],
    downloadFileName = 'download.json',
    readOnly,
  } = props;

  function onEditorMount(editor: any, monaco: Monaco) {
    monaco.editor.defineTheme('blue', vs_blue);
    monaco.editor.setTheme('blue');

    if (schema) {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: prepareSchema(schema),
        schemaValidation: 'error',
      });
    }

    setTimeout(() => {
      editor.focus();
    });
  }

  function onChange(value: string | undefined, _ev: monaco.editor.IModelContentChangedEvent) {
    props.onChange(value);
  }

  function onAction(action: EditorAction) {
    switch (action) {
      case 'content_copy':
        toast.show('Copied to clipboard');
        navigator.clipboard.writeText(value ?? '');
        break;
      case 'download':
        const json = JSON.parse(value ?? '') ?? {};
        downloadJson(downloadFileName, json);
        break;
      default:
        if (props.onAction) {
          props.onAction(action);
        }
    }
  }

  function renderAction(action: EditorAction) {
    return (
      <Action key={action} className='Action'>
        <Icon name={action as any} onClick={() => onAction(action)} />
      </Action>
    );
  }

  function renderActions() {
    return actions.map((action: EditorAction) => renderAction(action));
  }

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    fontSize: isMobile() ? 11 : 16,
    lineNumbers: hideLineNumbers ? 'off' : 'on',
    readOnly,
    mouseWheelScrollSensitivity: 0.2,
  };

  return (
    <Wrapper className='EditorCode-wrapper' data-testid='EditorCode-wrapper'>
      <MonacoEditor
        language={language}
        onMount={onEditorMount}
        theme='blue'
        value={value}
        width={typeof width === 'number' ? width + 'px' : width}
        height={typeof height === 'number' ? height + 'px' : height}
        options={options}
        onChange={onChange}
      />
      <Actions>{renderActions()}</Actions>
    </Wrapper>
  );
}

export default EditorCode;
