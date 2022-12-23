import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    border: 1px solid #445;
    border-radius: 5px;
    padding: 10px 0;
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.3);
    min-width: 165px;
`;

export const Project = styled.div`
    padding: 3px 10px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    ${(props) => props.theme.borderRight('1px solid rgba(255, 255, 255, 0.1)')}
    ${(props) => props.theme.floatLeft()}
    width: 80px;

    &:hover,
    &.selected {
        color: gold;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:last-child {
        border-bottom: none;
    }

    &:active {
        position: relative;
        bottom: 1px;
        ${(props) => props.theme.left('1px')}
    }
`;

export const ProjectKey = styled.div``;

export const ProjectTitle = styled.div`
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
    max-width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
