import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #334;
    position: fixed;
    top: 350px;
    right: 200px;
    width: 230px;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const MenuButton = styled.button`
    background-color: transparent;
    border: 1px solid #aaa;
    color: #eee;
    margin: 2px 3px;
    border-radius: 8px;
    font-size: 16px;
    height: 40px;
    min-width: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &.isActive {
        background-color: gold;
        border: 1px solid #445;
        color: #334;
    }

    &:active {
        position: relative;
        top: 1px;
        ${(props) => props.theme.left('1px')}
    }
`;
