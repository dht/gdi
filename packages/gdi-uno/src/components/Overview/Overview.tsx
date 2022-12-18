import React from 'react';
import { Wrapper, H2 } from './Overview.style';
import ReactMarkdown from 'react-markdown';
import { IUnoSection } from '../../types';

export type OverviewProps = {
    data: Json;
    section: IUnoSection;
};

export function Overview(props: OverviewProps) {
    const { data } = props;
    const { overview } = data;

    return (
        <Wrapper className='Overview-wrapper' data-testid='Overview-wrapper'>
            <H2>Overview</H2>
            <ReactMarkdown>{overview}</ReactMarkdown>
        </Wrapper>
    );
}

export default Overview;
