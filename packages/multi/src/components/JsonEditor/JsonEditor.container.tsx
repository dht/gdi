import { useMemo } from 'react';
import { Json } from '../../types';
import JsonEditor from './JsonEditor';
import { JsonEditorProvider } from './JsonEditor.context';
import { IJsonEditorCallbacks, IJsonEditorConfig } from './JsonEditor.types';

export type JsonEditorContainerProps = {
  config?: IJsonEditorConfig;
  callbacks: IJsonEditorCallbacks;
  data?: Json[];
};

export function JsonEditorContainer(props: JsonEditorContainerProps) {
  const { config, data } = props;

  const value = useMemo(() => {
    return JSON.stringify(data, null, 2);
  }, [data]);

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, _params?: Json) => {},
      onSort: () => {},
    }),
    []
  );

  return (
    <JsonEditorProvider callbacks={callbacks} state={initialState}>
      <JsonEditor value={value} />
    </JsonEditorProvider>
  );
}

export default JsonEditorContainer;
