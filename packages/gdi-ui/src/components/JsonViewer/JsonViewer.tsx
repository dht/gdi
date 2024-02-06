import { useEffect, useMemo, useState } from 'react';
import { highlight } from '../../utils/highlight';
import EditorCode from '../EditorCode/EditorCode';
import { Pre, Wrapper } from './JsonViewer.style';
import { useMeasureOnce } from '../List/List.hooks';

export type JsonViewerProps = {
  url?: string;
  value?: Json;
  simple?: boolean;
};

export function JsonViewer(props: JsonViewerProps) {
  const { simple, url, value = '{}' } = props;
  const [text, setText] = useState(JSON.stringify(value, null, 2));
  const [ref, { width }] = useMeasureOnce();

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setText(text);
      });
  }, [url]);

  useEffect(() => {
    setText(JSON.stringify(value, null, 2));
  }, [value]);

  const code = useMemo(() => {
    return highlight(text, { language: 'json' });
  }, [text]);

  function onChange(value: any) {
    setText(value);
  }

  function renderInner() {
    if (simple) {
      const style: React.CSSProperties = {
        maxWidth: width + 'px',
      };

      return <Pre style={style} dangerouslySetInnerHTML={{ __html: code.value }} />;
    } else {
      return <EditorCode language='json' readOnly value={text} onChange={onChange} />;
    }
  }

  return (
    <Wrapper ref={ref} className='JsonViewer-wrapper' data-testid='JsonViewer-wrapper'>
      {renderInner()}
    </Wrapper>
  );
}

export default JsonViewer;
