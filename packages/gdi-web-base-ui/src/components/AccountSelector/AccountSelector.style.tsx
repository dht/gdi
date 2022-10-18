import styled from 'styled-components';

export const Container = styled.div`
    background-color: #223;
    box-shadow: inset 0 0 1px 5px rgba(0, 0, 0, 0.2);
    padding: 7px 20px;
    border-radius: 7px;
    border: 1px solid #667;
    font-size: 15px;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: palevioletred;
        color: #334;
        font-weight: 500;
    }

    &:active {
        position: relative;
        bottom: 1px;
        left: 1px;
    }
`;
