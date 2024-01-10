import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px 0 15px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

export const Cell = styled.div`
    height: 30px;
    padding: 10px;
    position: relative;
    flex: 1;

    &:first-child {
        border-right: 1px solid #ccc;
    }

    &:last-child {
        border-right: none;
    }

    label {
        display: block;
        font-size: 11px;
    }
`;

export const Value = styled.div`
    span {
        font-size: 12px;
        color: #999;
    }
`;
