import React from 'react';
import { useMeasure, useToggle } from 'react-use';
import { usePopupRemote } from '@gdi/hooks';
import {
    Wrapper,
    Box,
    Title,
    Paragraph,
    Video,
    Top,
    Time,
    Category,
    A,
    Close,
    Youtube,
    Reason,
} from './ProTip.style';

export type ProTipProps = {
    content?: Json;
    contentUrl: string;
    callbacks: {
        onClose: () => void;
    };
};

export function ProTip(props: ProTipProps) {
    const { contentUrl, callbacks } = props;
    const [content, { className, onClose }] = usePopupRemote(
        contentUrl,
        callbacks.onClose
    );
    const { category, description, reasoning, slogan, title, youtubeUrl } =
        (content as Json) ?? {};

    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    const [showReason, toggleReason] = useToggle(false);

    if (!content) {
        return null;
    }

    function renderMedia() {
        if (!youtubeUrl) {
            return null;
        }

        if (showReason) {
            return (
                <>
                    <Reason>{reasoning}</Reason>

                    <A
                        onClick={() => toggleReason(false)}
                        style={{ float: 'right' }}
                    >
                        Got it
                    </A>
                </>
            );
        }

        return (
            <Video ref={ref}>
                <Youtube
                    width={width}
                    height={height}
                    src={youtubeUrl}
                    title={title}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            </Video>
        );
    }

    return (
        <Wrapper className={className} data-testid='ProTip-wrapper'>
            <Close onClick={onClose}>
                <i className='material-icons'>close</i>
            </Close>
            <Box>
                <Top>
                    <Time>{slogan}</Time>
                    <Category>{category}</Category>
                </Top>

                <Title>{title}</Title>
                <Paragraph>
                    {description}
                    {reasoning && !showReason && (
                        <A onClick={() => toggleReason(true)}>Why should I?</A>
                    )}
                </Paragraph>

                {renderMedia()}
            </Box>
        </Wrapper>
    );
}

export default ProTip;
