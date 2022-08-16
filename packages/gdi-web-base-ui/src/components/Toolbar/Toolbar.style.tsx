import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Item = styled.div`
    font-size: 22px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        color: gold;
        cursor: pointer;
    }

    &.selected {
        color: gold;
    }

    .icon {
        display: block;
    }
`;
