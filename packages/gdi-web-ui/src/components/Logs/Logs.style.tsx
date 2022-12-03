import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    font-family: monospace;
    min-width: 500px;

    &.large {
        .sequence {
            font-size: 14px;
        }

        .timestamp {
            font-size: 16px;
        }

        .title {
            font-size: 16px;
            margin-bottom: 3px;
        }

        .data {
            font-size: 14px;
        }
    }
`;

export const Item = styled.div<{ index: number }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) =>
        props.index % 2 === 0 ? 'rgba(255, 255, 255, 0.03)' : ''};
`;

export const Column = styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    flex: ${(props) => (props.width ? 'none' : 1)};
    width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Timestamp = styled.div`
    color: gold;
    font-size: 14px;
    padding: 0 10px;
`;

export const Title = styled.div`
    flex: 1;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 280px;
    margin-bottom: 2px;
`;

export const Data = styled.div`
    font-size: 12px;
    color: #888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
    cursor: pointer;
`;

export const Sequence = styled.div`
    color: cyan;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 5px;
    align-self: center;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const Status = styled.div`
    font-size: 12px;
    color: #aab;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
`;

export const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 2px;
    position: absolute;
    bottom: 19px;
    right: 70px;

    &.running {
        animation-name: blink;
        animation-duration: 2200ms;
        animation-iteration-count: infinite;
        border: 1px solid goldenrod;
    }

    &.warning {
        background-color: gold;
    }

    &.success {
        background-color: greenyellow;
        border: 1px solid greenyellow;
    }

    &.error {
        background-color: red;
        border: 1px solid red;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
