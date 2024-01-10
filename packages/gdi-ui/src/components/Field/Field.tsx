import classnames from 'classnames';
import { FC } from 'react';
import { Control, useController, useFormState } from 'react-hook-form';
import Auto from '../Auto/Auto';
import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import { FieldType, IFormField, LabelSize } from '../Form/Form.types';
import { IOEditor } from '../IOEditor/IOEditor';
import Input from '../Input/Input';
import JsonEditor from '../JsonEditor/JsonEditor';
import { JsonTable } from '../JsonTable/JsonTable';
import { Label } from '../Label/Label';
import Tags from '../Tags/Tags';
import { Editor, Wrapper } from './Field.style';

export type FieldProps = {
  field: IFormField;
  control: Control;
  errorMessage?: string;
  labelSize?: LabelSize;
  itemId?: string;
  isError?: boolean;
  options?: IOption[];
};

export function Field(props: FieldProps) {
  const { field, labelSize } = props;
  const { id, fieldType, params, tooltip } = field;

  const formState = useFormState();

  const isError = formState.errors[id] !== undefined;
  const isHidden = shouldHide(props);

  const Cmp = map[fieldType];

  const className = classnames('Field-wrapper', params?.className, {});

  if (isHidden) {
    return null;
  }

  function renderLabel() {
    if (labelSize === 'none') {
      return;
    }

    return <Label field={field} isError={isError} tooltip={tooltip} />;
  }

  return (
    <Wrapper className={className} data-testid='Field-wrapper'>
      {renderLabel()}
      <Cmp {...props} isError={isError} />
    </Wrapper>
  );
}

export function FieldInput(props: FieldProps) {
  const { field, control, isError, labelSize } = props;
  let { placeholder, label, autoFocus, isDisabled, params } = field;
  const { rows } = params ?? {};

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  if (labelSize === 'base') {
    label = '';
  }

  return (
    <Input
      placeholder={placeholder}
      rows={rows}
      autoFocus={autoFocus}
      label={label}
      data-testid={`input-${field.id}`}
      {...fieldMethods}
    />
  );
}

export function FieldSelect(props: FieldProps) {
  const { field, control, isError, labelSize, options = [] } = props;
  let { placeholder, label, autoFocus, isReadOnly, isDisabled } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  if (labelSize === 'base') {
    label = '';
  }

  return (
    <Dropdown
      placeholder={placeholder}
      isError={isError}
      data-testid={`input-${field.id}`}
      isDisabled={isDisabled}
      options={options}
      {...fieldMethods}
    />
  );
}

export function FieldAutoComplete(props: FieldProps) {
  const { field, control, isError, labelSize, options = [] } = props;
  let { placeholder, label, autoFocus, isReadOnly, isDisabled } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  if (labelSize === 'base') {
    label = '';
  }

  return (
    // @ts-ignore
    <Auto
      placeholder={placeholder}
      isError={isError}
      data-testid={`input-${field.id}`}
      isDisabled={isDisabled}
      options={options}
      {...fieldMethods}
    />
  );
}

export function FieldEmail(props: FieldProps) {
  const { field, control, isError, labelSize } = props;
  let { placeholder, label, autoFocus, isDisabled } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  if (labelSize === 'base') {
    label = '';
  }

  return (
    <Input
      placeholder={placeholder}
      autoFocus={autoFocus}
      label={label}
      data-testid={`input-${field.id}`}
      {...fieldMethods}
    />
  );
}

export function FieldCheckbox(props: FieldProps) {
  const { field, control, isError, labelSize } = props;
  let { placeholder = '', label = '', autoFocus, isDisabled } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  return (
    <Checkbox id={field.id} {...fieldMethods} label={label} data-testid={`input-${field.id}`} />
  );
}

export function FieldPassword(props: FieldProps) {
  const { field, control, isError, labelSize } = props;
  let { placeholder, label, autoFocus, isDisabled } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  if (labelSize === 'base') {
    label = '';
  }

  return (
    <Input
      isPassword
      autoFocus={autoFocus}
      label={label}
      placeholder={placeholder}
      data-testid={`input-${field.id}`}
      {...fieldMethods}
    />
  );
}

export function FieldHidden(props: FieldProps) {
  const { field, control } = props;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  return <input type='hidden' data-testid={`input-${field.id}`} {...fieldMethods} />;
}

export function FieldTags(props: FieldProps) {
  const { field, control, isError, labelSize } = props;
  let { placeholder, label, autoFocus, params } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  if (labelSize === 'base') {
    label = '';
  }

  return (
    <Tags
      options={[]}
      autoFocus={autoFocus}
      placeholder={placeholder}
      data-testid={`input-${field.id}`}
      maxTags={params?.maxTags}
      enterAsSymbol={params?.enterAsSymbol}
      {...fieldMethods}
    />
  );
}

export function FieldIO(props: FieldProps) {
  const { field, control } = props;
  const { label, params } = field;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  return <IOEditor title={label} {...fieldMethods} {...params} onAction={() => {}} />;
}

export function FieldJson(props: FieldProps) {
  const { field, control } = props;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  return <JsonTable {...fieldMethods} />;
}

export function FieldCode(props: FieldProps) {
  const { field, control } = props;

  const { field: fieldMethods } = useController({
    name: field.id,
    control,
  });

  return (
    <Editor>
      <JsonEditor height={200} {...fieldMethods} />
    </Editor>
  );
}

export const shouldHide = (props: FieldProps) => {
  const { field, options = [] } = props;
  const { fieldType, params } = field;
  const { hideIfEmpty, emptyCount } = params ?? {};

  if (!['select', 'multiselect', 'autocomplete'].includes(fieldType)) {
    return false;
  }

  if (hideIfEmpty && options.length <= emptyCount) {
    return true;
  }
};

const map: Record<FieldType, FC<FieldProps>> = {
  text: FieldInput,
  password: FieldPassword,
  email: FieldEmail,
  autocomplete: FieldAutoComplete,
  select: FieldSelect,
  checkbox: FieldCheckbox,
  hidden: FieldHidden,
  tags: FieldTags,
  io: FieldIO,
  json: FieldJson,
  code: FieldCode,
};

export default Field;
