import React from 'react';
import { Wrapper, Item, Time, Title } from './DomainHistory.style';

export type DomainHistoryProps = {};

export function DomainHistory(_props: DomainHistoryProps) {
    return (
        <Wrapper
            className='DomainHistory-wrapper'
            data-testid='DomainHistory-wrapper'
        >
            <Item highlighted={false}>
                <Time>05/12</Time>
                <Title>Bought MacBook Pro</Title>
            </Item>
            <Item highlighted={false}>
                <Time>05/14</Time>
                <Title>Hired design in fiverr</Title>
            </Item>
            <Item highlighted={true}>
                <Time>05/16</Time>
                <Title>Online course about office management</Title>
            </Item>
            <Item highlighted={false}>
                <Time>05/17</Time>
                <Title>New filling cabinet</Title>
            </Item>
            <Item highlighted={false}>
                <Time>05/17</Time>
                <Title>New internet supplier</Title>
            </Item>
        </Wrapper>
    );
}

export default DomainHistory;
