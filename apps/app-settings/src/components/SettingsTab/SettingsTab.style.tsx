import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Tab = styled.div`
    padding: 6px 20px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(30, 30, 40, 0.8);
    white-space: nowrap;
    font-size: 20px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        background-color: rgba(30, 30, 40, 0.5);
    }

    &.selected {
        color: gold;
        background-color: #223;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom-color: transparent;
    }
`;
