import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    padding-right: 5px;

    &.selected {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border: 1px solid gold;
            pointer-events: none;
        }
    }
`;

export const Item = styled.div`
    background-color: rgba(155, 155, 155, 0.2);
    margin: 5px;
    margin-right: 0;
    position: relative;
    color: #ccd;
    user-select: none;

    &.empty {
        color: #778;
    }

    &.selected {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border: 1px solid gold;
            pointer-events: none;
        }
    }
`;

export const Content = styled.div`
    flex: 1;
    min-height: 400px;
    display: flex;
`;

export const ItemTitle = styled.div`
    padding: 10px;
    font-family: monospace;
`;
