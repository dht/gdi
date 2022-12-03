import styled from 'styled-components';

export const Wrapper = styled.div`
    z-index: 999;
    padding: 5px;
    background-color: #112;
    color: #eee;
    height: 97px;
`;

export const Item = styled.div`
    width: 60px;
    background-color: #223;
    padding: 6px 5px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    ${(props) => props.theme.floatLeft()}
    cursor: pointer;
    text-align: center;
    position: relative;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:active {
        position: relative;
        bottom: 1px;
        ${(props) => props.theme.left('1px')}
    }

    &.selected {
        color: gold;
    }
`;

export const Title = styled.div`
    max-width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Count = styled.div`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
`;

export const Letter = styled.div`
    font-size: 8px;
    color: palevioletred;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #112;
    padding: 0 4px;
    border-radius: 3px;
`;
