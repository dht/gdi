import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #334;
    width: 350px;
    height: 500px;
    position: absolute;
    z-index: 999;
    left: 0;
    top: 0;
    border-radius: 10px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2),
        inset 0 0 15px 5px rgba(0, 0, 0, 0.1);
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
`;

export const Item = styled.div`
    padding-left: 10px;
`;

export const Title = styled.div`
    cursor: pointer;
    padding: 3px;

    &.selected {
        color: gold;
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
    padding: 10px 3px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        box-shadow: inset -3px 0 3px 1px rgba(255, 255, 255, 0.2);
    }
`;
