import { useEffect, useState } from 'react';
import Markdown, { MarkdownProps } from './Markdown';

export type MarkdownRemoteProps = Omit<MarkdownProps, 'markdown'> & {
  url: string;
};

export function MarkdownRemote(props: MarkdownRemoteProps) {
  const { url } = props;
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [url]);

  return <Markdown {...props} markdown={markdown} />;
}

export default MarkdownRemote;
