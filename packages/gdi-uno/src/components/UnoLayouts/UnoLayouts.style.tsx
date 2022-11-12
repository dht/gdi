import styled from 'styled-components';

export const Container = styled.div<{ width?: number }>`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div``;

export const Center = styled.div``;

export const Wrapper = styled.div<{ orientation?: 'row' | 'column' }>`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: ${(props) => props.orientation || 'row'};
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Column = styled.div`
    margin-top: 45px;
    padding-bottom: 50px;

    &:nth-child(1) {
        flex: 3;
        padding-right: 80px;
        border-right: 2px solid #f1f1f1;
    }

    &:nth-child(2) {
        flex: 2;
        padding-left: 20px;
    }
`;
