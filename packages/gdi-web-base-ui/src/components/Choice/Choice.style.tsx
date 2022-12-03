import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    padding: 20px 0 30px;
    max-width: 450px;
`;

export const Item = styled.div`
    padding: 5px;
    float: left;
`;

export const Button = styled.button`
    background-color: #223;
    color: #eee;
    border: 1px solid #445;
    width: 140px;
    height: 100px;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
        font-size: 34px;
        margin-bottom: 5px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &.selected {
        border: 1px solid gold;
        background-color: #ffe4496e;
    }

    &.focused {
        border: 1px solid gold;
    }
`;
