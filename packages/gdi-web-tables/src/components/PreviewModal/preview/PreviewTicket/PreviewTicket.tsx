import React from 'react';
import { Container, Summary, TimeEstimate } from './PreviewTicket.style';

export type PreviewTicketProps = {
    item: ITicket;
};

export function PreviewTicket(props: PreviewTicketProps) {
    const { item } = props;
    const { summary, timeEstimate } = item;

    return (
        <Container
            className='PreviewTicket-container'
            data-testid='PreviewTicket-container'
        >
            <Summary>{summary}</Summary>

            <TimeEstimate>
                {timeEstimate}

                <span>minutes</span>
            </TimeEstimate>
        </Container>
    );
}

export default PreviewTicket;
