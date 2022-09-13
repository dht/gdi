import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const H1 = styled.h1``;

export const Count = styled.div`
    margin: 0 10px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.i<{ isOn?: boolean }>`
    font-size: 20px;
    background-color: #334;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    color: ${(props) => (props.isOn ? 'gold' : '#aab')};
    cursor: pointer;

    &:hover {
        background-color: #445;
    }

    &:active {
        position: relative;
        bottom: 1px;
        left: 1px;
    }

    &.on {
        color: gold;
    }
`;
