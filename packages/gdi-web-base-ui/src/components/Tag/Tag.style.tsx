import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.small {
        font-size: 12px;

        .title {
            padding: 2px 8px;
        }

        .delete {
            padding: 3px 7px 2px 5px;
            border-radius: 0 4px 4px 0;
            font-size: 12px;
        }
    }

    &.medium {
        font-size: 16px;

        .title {
            padding: 4px 10px;
        }

        .delete {
            padding: 6px 8px 4px;
            border-radius: 0 8px 8px 0;
            font-size: 14px;
        }
    }

    &.large {
        font-size: 18px;

        .title {
            padding: 6px 13px;
        }

        .delete {
            padding: 9px 11px 6px;
            border-radius: 0 10px 10px 0;
            font-size: 17px;
        }
    }

    &.type {
        background-color: yellowgreen;
        color: #333;
    }

    &.gold {
        background-color: gold;
        color: #333;
    }

    &.blue {
        background-color: dodgerblue;
        color: #eee;
    }

    &.cyan {
        background-color: paleturquoise;
        color: #333;
    }

    &.pink {
        background-color: palevioletred;
        color: #333;
    }
`;

export const Title = styled.div`
    user-select: none;
`;

export const Delete = styled.div`
    ${(props) => props.theme.borderLeft('1.5px solid rgba(0, 0, 0, 0.3)')}
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:active {
        position: relative;
        bottom: 1px;
        ${(props) => props.theme.left('1px')}
    }
`;
