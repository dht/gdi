import React from 'react';
import { Container, H2 } from './Overview.style';
import ReactMarkdown from 'react-markdown';

export type OverviewProps = {
    data: Json;
};

export function Overview(props: OverviewProps) {
    const { data } = props;
    const { overview } = data;

    return (
        <Container
            className='Overview-container'
            data-testid='Overview-container'
        >
            <H2>Overview</H2>

            <ReactMarkdown>{overview}</ReactMarkdown>
        </Container>
    );
}

export default Overview;
