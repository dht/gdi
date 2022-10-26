import React from 'react';
import { Announcement, Container, Level, Title } from './DomainHeader.style';

export type DomainHeaderProps = {};

export function DomainHeader(_props: DomainHeaderProps) {
    return (
        <Container
            className='DomainHeader-container'
            data-testid='DomainHeader-container'
        >
            <Announcement>domain</Announcement>
            <Title>Office Management</Title>
            <Level>Level 2 - 85%</Level>
        </Container>
    );
}

export default DomainHeader;
