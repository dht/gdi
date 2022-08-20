import styled from 'styled-components';

export const Container = styled.div<{ horizontal?: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
    align-items: stretch;

    &.horizontal {
        .item {
            width: 41px;
        }
    }
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
