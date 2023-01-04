import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Column = styled.div<{ flex?: number }>`
    flex: ${(props) => props.flex || 1};
    display: flex;
`;

export const Row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    &:nth-child(2) {
        max-height: 100px;
    }
`;

export const Actions = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0 40px;
    border-top: 1px solid #445;
`;
