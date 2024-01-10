export type IFormConfig = {
  id: string;
  sequence?: number;
  header?: string;
  description?: string;
  layout: IFormLayout;
  groups: IFormGroup[];
  fields: IFormField[];
  submit: IFormSubmit;
  cancel: IFormCancel;
};

export type LayoutFlavour = 'singleColumn' | 'twoColumns' | 'threeColumns' | string;

export type LabelSize = 'base' | 'compact' | 'none' | string;

export type IFormLayout = {
  flavour: LayoutFlavour;
  width?: number;
  maxContentHeight?: string;
  padding?: number;
  flex?: number[];
  labelSize?: LabelSize;
};

export type IFormGroup = {
  id: string;
  title?: string;
  tooltip?: string;
  isCollapsible?: boolean;
  layoutColumnIndex: number;
};

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'autocomplete'
  | 'checkbox'
  | 'select'
  | 'multiselect'
  | 'tags'
  | 'stopSequences'
  | 'hidden'
  | 'slider'
  | 'io'
  | 'json'
  | 'code'
  | string;

export type IFormField = {
  id: string;
  fieldType: FieldType;
  groupId: string;
  label?: string;
  tooltip?: string;
  optionSelector?: string;
  placeholder?: string;
  description?: string;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
  params?: Json;
  filterOptions?: Json;
  rules?: IFieldRule[];
};

export type IFormSubmit = {
  title: string;
  iconName?: string;
  groupId?: string;
};

export type IFormCancel = {
  title: string;
};

export type IFormProps = {
  config: IFormConfig;
  data: Json;
  allOptions?: Json;
  onSubmit: (change: Json, allData: Json) => Promise<boolean>;
  onChange?: (change: Json) => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  error?: string;
  sync?: boolean;
};

export type IFieldRule = {
  type: 'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'custom' | 'equal';
  message: string;
  value: string;
};
