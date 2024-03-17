import Creatable from '../Creatable/Creatable';
import { Wrapper } from './TagPicker.style';

export type TagPickerProps = {
  value: string[];
  options: Json[];
  onChange: (value: string[]) => void;
  isMulti?: boolean;
  placeholder?: string;
};

export function TagPicker(props: TagPickerProps) {
  const { value, options, isMulti, placeholder } = props;

  function onChange(value: string[]) {
    const newValue = isMulti ? value : [value.pop()].filter((i) => i);
    props.onChange(newValue);
  }

  function onKeyPress(ev: any) {
    ev.stopPropagation();
  }

  return (
    <Wrapper className='TagPicker-wrapper' data-testid='TagPicker-wrapper'>
      <Creatable
        options={options}
        value={value}
        isMulti={true}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default TagPicker;
