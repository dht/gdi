import { useEffect, useState } from 'react';
import { Wrapper } from './JsonViewer.style';
import EditorCode from '../EditorCode/EditorCode';

export type JsonViewerProps = {
  url: string;
};

export function JsonViewer(props: JsonViewerProps) {
  const { url } = props;
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setText(text);
      });
  }, [url]);

  function onChange(value: any) {
    setText(value);
  }

  function onKeyDown(ev: any) {
    ev.stopPropagation();
  }

  return (
    <Wrapper className='JsonViewer-wrapper' data-testid='JsonViewer-wrapper'>
      <EditorCode language='json' readOnly value={text} onChange={onChange} />
    </Wrapper>
  );
}

export default JsonViewer;
