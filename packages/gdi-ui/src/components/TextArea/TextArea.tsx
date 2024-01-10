import { forwardRef } from 'react';
import { InputProps } from '../Input/Input';
import { Wrapper } from './TextArea.style';

export type TextAreaProps = InputProps & {};

export const TextArea = forwardRef((props: InputProps, ref: any) => {
  const { placeholder, value = '', rows = 3, preventArrows } = props;

  function onKeyDown(ev: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (isArrowKey(ev.key) && preventArrows) {
      ev.preventDefault();
    }
    if (props.onKeyDown) {
      props.onKeyDown(ev);
    }
  }

  function onChange(event: React.FormEvent<HTMLTextAreaElement>, _newValue?: string) {
    props.onChange(event);
  }

  return (
    <Wrapper
      className='TextArea-wrapper'
      data-testid='TextArea-wrapper'
      ref={ref}
      auto-complete='off'
      placeholder={placeholder}
      rows={rows}
      value={value}
      onBlur={props.onBlur}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
});

export default TextArea;

const isArrowKey = (key: string) => {
  return key === 'ArrowUp' || key === 'ArrowRight' || key === 'ArrowDown' || key === 'ArrowLeft';
};
