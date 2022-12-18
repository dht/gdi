import styled from 'styled-components';

export const Wrapper = styled.button`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: gold;
    }

    &:active {
        i {
            position: relative;
            bottom: 1px;
            left: 1px;
        }
    }
`;

export const Badge = styled.div`
    background-color: red;
    color: white;
    position: absolute;
    top: -8px;
    right: -12px;
    border-radius: 5px;
    padding: 1px 3px;
    font-weight: 600;
    min-width: 22px;
`;
