import { useMemo, useState } from 'react';
import { Button } from '../Button/Button';
import { EditorAction, EditorCode } from '../EditorCode/EditorCode';
import { Schema } from '../EditorCode/EditorCode.types';
import { Actions, Wrapper } from './EditorSchema.style';
import { allSchemas } from './schemas';

export type EditorSchemaProps = {
  value?: string;
  onChange: (value?: string) => void;
  width?: string | number;
  height?: string | number;
  schema?: Schema | Schema[];
  schemaId?: string;
  actions?: EditorAction[];
  downloadFileName?: string;
  valueSuggested?: string;
  onCta: (value?: string) => void;
  onClose: () => void;
};

export function EditorSchema(props: EditorSchemaProps) {
  const { valueSuggested, schemaId, schema } = props;
  const [value, setValue] = useState<string | undefined>(props.value);

  const currentSchema = allSchemas[schemaId ?? ''] || schema;

  function onChange(content?: string) {
    if (!props.onChange) {
      return;
    }

    props.onChange(content);
  }

  function onAction(action: EditorAction) {
    switch (action) {
      case 'code':
        if (!valueSuggested) {
          return;
        }
        setValue(JSON.stringify(valueSuggested, null, 2));
        break;
    }
  }

  return (
    <Wrapper className='EditorSchema-wrapper' data-testid='EditorSchema-wrapper'>
      <EditorCode
        language='json'
        {...props}
        value={value}
        onChange={onChange}
        onAction={onAction}
        schema={currentSchema}
      />

      <Actions>
        <Button color='secondary' link testId='prompt-cancel-btn' onClick={props.onClose}>
          Cancel
        </Button>
        <Button color='primary' testId='prompt-cta-btn' onClick={() => props.onCta(value)}>
          Save Definition
        </Button>
      </Actions>
    </Wrapper>
  );
}

export default EditorSchema;
