import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #334;
    width: 350px;
    height: 500px;
    position: absolute;
    z-index: 999;
    ${(props) => props.theme.left(0)}
    top: 0;
    border-radius: 10px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2),
        inset 0 0 15px 5px rgba(0, 0, 0, 0.1);
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
`;

export const Item = styled.div`
    ${(props) => props.theme.paddingLeft('10px')}
`;

export const Title = styled.div`
    cursor: pointer;
    padding: 3px;

    &.selected {
        color: gold;
        background-color: #112;
    }

    &.container {
        color: #778;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    span {
        color: #556;
    }
`;

export const Tree = styled.div`
    flex: 1;
    overflow: auto;
`;

export const ContainerResolutions = styled.div`
    width: 100px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: inset -3px 0 3px rgba(255, 255, 255, 0.2);
`;

export const Resolution = styled.div`
    ${(props) => props.theme.padding('10px 3px 10px 8px')}
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;

    .star {
        color: gold;
        ${(props) => props.theme.marginLeft('5px')}
        position: relative;
        top: 1px;
    }

    &.empty {
        color: #778;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        box-shadow: inset -3px 0 3px 1px rgba(255, 255, 255, 0.2);
    }

    &.selected {
        color: gold;
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: inset -3px 0 3px 1px rgba(0, 0, 0, 0.1);
    }
`;

export const ResolutionName = styled.div`
    flex: 1;
`;

export const ResolutionCount = styled.div`
    padding: 2px 5px;
    background-color: #001;
    font-size: 11px;
    color: #778;
    border-radius: 5px;
    ${(props) => props.theme.marginRight('2px')}
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Info = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    box-shadow: inset 0 5px 2px 0 rgba(0, 0, 0, 0.1);
    text-align: left;
`;

export const ResolutionTitle = styled.div`
    font-size: 27px;
    font-weight: 200;
    color: gold;
    margin-bottom: 3px;
`;

export const ResolutionDimensions = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 17px;
`;
