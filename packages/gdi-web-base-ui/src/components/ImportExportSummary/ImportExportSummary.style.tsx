import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 50px;
    min-width: 580px;
`;

export const Pair = styled.div`
    padding: 20px;
`;

export const Label = styled.label`
    font-size: 18px;
    color: #778;
`;

export const Value = styled.div`
    margin-top: 3px;
    font-size: 30px;
    font-weight: 200;
    color: gold;
`;

export const P = styled.p`
    max-width: 300px;
    font-size: 12px;
    line-height: 1.2;
    color: gray;

    &::before {
        content: '* ';
        margin-left: -9px;
    }
`;

export const Flex = styled.div`
    flex: 1;
`;
