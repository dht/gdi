import React, { useEffect, useState } from 'react';
import { Textarea, Wrapper } from './TextViewer.style';
import EditorCode from '../EditorCode/EditorCode';

export type TextViewerProps = {
  url: string;
};

export function TextViewer(props: TextViewerProps) {
  const { url } = props;
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setText(text);
      });
  }, [url]);

  function onChange(ev: any) {
    setText(ev.target.value);
  }

  function onKeyDown(ev: any) {
    ev.stopPropagation();
  }

  return (
    <Wrapper className='TextViewer-wrapper' data-testid='TextViewer-wrapper'>
      <Textarea value={text} onChange={onChange} onKeyDown={onKeyDown} />
    </Wrapper>
  );
}

export default TextViewer;
