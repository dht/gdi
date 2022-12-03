import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    ${(props) => props.theme.paddingRight('5px')}

    &.selected {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            ${(props) => props.theme.left(0)}
            ${(props) => props.theme.right(0)}
            bottom: 0;
            border: 1px solid gold;
            pointer-events: none;
        }
    }
`;

export const Item = styled.div`
    background-color: rgba(155, 155, 155, 0.2);
    margin: 5px;
    ${(props) => props.theme.marginRight(0)}
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
            ${(props) => props.theme.left(0)}
            ${(props) => props.theme.right(0)}
            bottom: 0;
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
