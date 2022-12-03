import styled from 'styled-components';

export const Wrapper = styled.div<{ horizontal?: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
    align-items: stretch;

    &.horizontal {
        .item {
            margin: 0 2px;
        }
    }
`;

export const Item = styled.div`
    font-size: 22px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        color: #ddd;

        &:first-child {
            font-size: 22px;
        }
    }

    &:hover {
        i {
            color: gold;
        }
        cursor: pointer;
    }

    &.selected {
        i {
            color: gold;
        }
    }

    .icon {
        display: block;
    }
`;

export const Gap = styled.div`
    width: 20px;
`;
