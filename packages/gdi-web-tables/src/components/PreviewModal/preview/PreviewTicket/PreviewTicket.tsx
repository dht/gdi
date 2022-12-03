import React from 'react';
import { Wrapper, Summary, TimeEstimate } from './PreviewTicket.style';

export type PreviewTicketProps = {
    item: ITicket;
};

export function PreviewTicket(props: PreviewTicketProps) {
    const { item } = props;
    const { summary, timeEstimate } = item;

    return (
        <Wrapper
            className='PreviewTicket-wrapper'
            data-testid='PreviewTicket-wrapper'
        >
            <Summary>{summary}</Summary>

            <TimeEstimate>
                {timeEstimate}

                <span>minutes</span>
            </TimeEstimate>
        </Wrapper>
    );
}

export default PreviewTicket;
