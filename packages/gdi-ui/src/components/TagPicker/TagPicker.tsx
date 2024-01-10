import Creatable from '../Creatable/Creatable';
import { Wrapper } from './TagPicker.style';

export type TagPickerProps = {
  value: string[];
  options: Json[];
  onChange: (value: string[]) => void;
};

export function TagPicker(props: TagPickerProps) {
  const { value, options } = props;

  function onChange(value: string[]) {
    props.onChange(value);
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
        placeholder='Choose tags'
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default TagPicker;
