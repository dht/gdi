import classnames from 'classnames';
import CreatableSelect from 'react-select/creatable';
import { useOptions, useValues } from './Creatable.hooks';
import { Wrapper, colorStyles } from './Creatable.style';

export type CreatableProps = {
  value: string[];
  options: Json[];
  isError?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  placeholder?: string;
  onChange: (values: string[]) => void;
  groupFieldId?: string;
  darkMode?: boolean;
};

export function Creatable(props: CreatableProps) {
  const { value, options, placeholder, isMulti, darkMode } = props;
  const mappedValues = useValues(value);
  const mappedOptions = useOptions(options);

  function onChange(items: Json | Json[]) {
    if (Array.isArray(items)) {
      const ids = items.map((item: any) => item.value);
      props.onChange(ids);
    } else {
      const id = items.value;
      props.onChange(id);
    }
  }

  function onKeyDown(ev: any) {
    if (ev.code !== 'Enter' && ev.code !== 'Escape') {
      ev.stopPropagation();
    }
  }

  function onCreateOption(newValue: string) {
    props.onChange([...value, newValue]);
  }
  const className = classnames('Creatable-wrapper', {
    dark: darkMode,
  });

  return (
    <Wrapper className={className} data-testid='Creatable-wrapper'>
      <CreatableSelect
        isClearable
        isMulti={isMulti}
        options={mappedOptions}
        onCreateOption={onCreateOption}
        onChange={onChange}
        value={mappedValues}
        styles={colorStyles}
        placeholder={placeholder}
        classNamePrefix='creatable'
        onKeyDown={onKeyDown}
      />
    </Wrapper>
  );
}

export default Creatable;
