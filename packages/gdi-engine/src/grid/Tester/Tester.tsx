import React from 'react';
import styled from 'styled-components';
import Column from '../Column/Column';
import Container from '../Container/Container';
import Row from '../Row/Row';
import { Wrapper } from './Tester.style';

export type TesterProps = {};

export function Tester(_props: TesterProps) {
    function renderColumn(index: number) {
        return (
            <Column key={index}>
                <Placeholder />
            </Column>
        );
    }

    function renderColumns(columns: number) {
        return [...new Array(columns)].map((_c, index: number) =>
            renderColumn(index)
        );
    }
    return (
        <Wrapper className='Tester-wrapper' data-testid='Tester-wrapper'>
            <Container>
                <Row>{renderColumns(1)}</Row>
                <Row>{renderColumns(2)}</Row>
                <Row>{renderColumns(3)}</Row>
                <Row>{renderColumns(4)}</Row>
                <Row>{renderColumns(6)}</Row>
                <Row>{renderColumns(12)}</Row>
            </Container>
        </Wrapper>
    );
}

export const Placeholder = styled.div`
    height: 100px;
    background-color: green;
    margin: 1px 0;
`;

export default Tester;
