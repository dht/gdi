import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.div`
    margin: 0 2px;
    font-size: 25px;
    width: 44px;
    border-radius: 4px;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;

    &:hover {
        color: gold;
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:active {
        bottom: 2px;
        ${(props) => props.theme.left('2px')}
        position: relative;
    }
`;
