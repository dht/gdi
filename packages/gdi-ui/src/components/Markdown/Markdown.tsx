import classnames from 'classnames';
import { useEffect, useMemo, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { isMobile } from '../../utils/mobile';
import { Wrapper } from './Markdown.style';
import { isJson } from './Markdown.utils';

export type MarkdownProps = {
  markdown: string;
  mode?: 'dark' | 'light';
  width?: number;
  height?: number;
  zoom?: number;
  wrap?: boolean;
};

export function Markdown(props: MarkdownProps) {
  const { markdown: markdownRaw, mode = 'light', zoom, width, height, wrap } = props;
  const ref = useRef<HTMLDivElement>(null);

  const className = classnames('Markdown-wrapper', mode, {
    wrap,
  });

  const classNameMarkdown = classnames('mark-down', mode);

  const markdown = useMemo(() => {
    if (isJson(markdownRaw)) {
      return '```' + markdownRaw + '```';
    }

    return markdownRaw;
  }, [markdownRaw]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (markdown.includes('```')) {
      (window as any)['hljs'].highlightAll(ref.current);
    }
  }, [markdown]);

  const style: React.CSSProperties = {
    height: height ? `${height}px` : 'auto',
    width: width ? `${width}px` : 'auto',
    zoom: zoom ? zoom : 1,
  };

  const linkTarget = (href: string) => {
    if (href.startsWith('http')) {
      return '_blank';
    }
  };

  return (
    <Wrapper className={className} data-testid='Markdown-wrapper' style={style} ref={ref}>
      <ReactMarkdown
        className={classNameMarkdown}
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw as any]}
        linkTarget={linkTarget}
      />
    </Wrapper>
  );
}

export default Markdown;
