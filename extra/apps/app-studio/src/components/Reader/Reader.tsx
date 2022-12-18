import React from 'react';
import { Close, Wrapper } from './Reader.style';
import { MarkDown } from '@gdi/web-ui';
import { removeHtmlFromMarkdown } from 'shared-base';
import { usePopupRemote } from '@gdi/hooks';

export type ReaderProps = {
    mode: 'dark' | 'light';
    content?: string;
    contentUrl: string;
    callbacks: {
        onClose: () => void;
    };
};

export function Reader(props: ReaderProps) {
    const { mode = 'light', contentUrl, callbacks } = props;
    const [content, { className, onClose }] = usePopupRemote(
        contentUrl,
        callbacks.onClose
    );

    return (
        <Wrapper className={className} data-testid='Reader-wrapper'>
            <MarkDown
                markdown={removeHtmlFromMarkdown((content as string) ?? '')}
                mode={mode}
            />
            <Close onClick={onClose}>
                <i className='material-icons'>close</i>
            </Close>
        </Wrapper>
    );
}

export default Reader;
