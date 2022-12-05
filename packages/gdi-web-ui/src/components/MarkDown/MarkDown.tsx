import React from 'react';
import { Wrapper } from './MarkDown.style';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classnames from 'classnames';

export type MarkDownProps = {
    markdown: string;
    mode: 'dark' | 'light';
    height?: number;
};

export function MarkDown(props: MarkDownProps) {
    const { markdown, mode = 'dark', height } = props;

    const className = classnames('MarkDown-wrapper', mode);
    const classNameMarkdown = classnames('mark-down', mode);

    return (
        <Wrapper
            className={className}
            data-testid='MarkDown-wrapper'
            height={height}
        >
            <ReactMarkdown
                className={classNameMarkdown}
                children={markdown}
                remarkPlugins={[remarkGfm]}
            />
        </Wrapper>
    );
}

export default MarkDown;
