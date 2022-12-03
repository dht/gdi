import React from 'react';
import { Announcement, Wrapper, Level, Title } from './DomainHeader.style';

export type DomainHeaderProps = {};

export function DomainHeader(_props: DomainHeaderProps) {
    return (
        <Wrapper
            className='DomainHeader-wrapper'
            data-testid='DomainHeader-wrapper'
        >
            <Announcement>domain</Announcement>
            <Title>Office Management</Title>
            <Level>Level 2 - 85%</Level>
        </Wrapper>
    );
}

export default DomainHeader;
