import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 100px;
    left: 100px;
    height: 700px;
    width: 420px;
    background-color: #334;
    display: flex;
    font-family: monospace;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 15px 2px 0;
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
`;

export const EventId = styled.div`
    flex: 1;
    font-size: 12px;
`;

export const Data = styled.div`
    font-size: 12px;
    color: #888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;

    &:hover {
        color: yellowgreen;
        cursor: pointer;
    }
`;

export const Sequence = styled.div`
    color: cyan;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 5px;
    align-self: center;
    background-color: rgba(255, 255, 255, 0.1);
`;
