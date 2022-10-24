import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-top: 1px solid #445;
    padding-bottom: 20px;
    --height: 28px;
    --color: #ccd;
    --bk-color: rgba(80, 80, 100, 0.2);
`;

export const Tab = styled.div`
    display: flex;
    height: var(--height);
    line-height: var(--height);
    flex-direction: row;
    align-items: stretch;
    cursor: pointer;
    border-top: 1px solid #445;
    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.4);
    border-radius: 0 0 50px 50px;
    position: relative;
    top: -2px;

    &:hover {
        --bk-color: rgba(255, 255, 255, 0.1);
        --color: #eef;
        box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0);
    }

    &.selected {
        --bk-color: #334;
        --color: gold;
        border-top: 1px solid transparent;
        box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0);
    }

    &::before {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 var(--height) var(--height) 0;
        border-color: transparent var(--bk-color) transparent transparent;
    }

    &::after {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: var(--height) var(--height) 0 0;
        border-color: var(--bk-color) transparent transparent transparent;
    }
`;

export const Title = styled.div`
    flex: 1;
    padding: 0 20px;
    background-color: var(--bk-color);
    color: var(--color);
`;
