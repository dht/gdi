import React, { useRef, useEffect } from 'react';
import { Container } from './ContentEditable.style';
import { Json } from '../../../../types';

export type ContentEditableProps = {
  defaultValue?: string;
  placeholder?: string;
  onSave: (value: string, options?: Json) => void;
  onCancel: () => void;
  autoFocus?: boolean;
  clearOnSave?: boolean;
  readOnly?: boolean;
};

export function ContentEditable(props: ContentEditableProps) {
  const { placeholder, defaultValue, autoFocus, clearOnSave, readOnly } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      const selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, []);

  function onBlur(withAddAnother?: boolean) {
    if (!ref.current || !ref.current.textContent) {
      props.onCancel();
      return;
    }

    const { textContent } = ref.current;

    props.onSave(textContent);

    if (clearOnSave) {
      ref.current.textContent = '';
    }
  }

  function onKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    if (!ref.current) {
      return;
    }

    switch (ev.key) {
      case 'Enter':
      case 'Tab':
        ev.preventDefault();
        onBlur(true);
        break;
      case 'Escape':
        ev.preventDefault();
        props.onCancel();
        break;
    }
  }

  return (
    <Container
      ref={ref}
      className='ContentEditable-container'
      data-testid='ContentEditable-container'
      suppressContentEditableWarning={true}
      data-ph={placeholder}
      onKeyDown={onKeyDown}
      onBlur={() => onBlur()}
      contentEditable={!readOnly}
      spellCheck={false}
    >
      {defaultValue}
    </Container>
  );
}

export default ContentEditable;
