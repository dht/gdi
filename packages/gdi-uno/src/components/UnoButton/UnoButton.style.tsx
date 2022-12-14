import styled from 'styled-components';

export const Wrapper = styled.a`
    flex: 1;
    background-color: var(--main-color);
    color: white;
    border: none;
    padding: 9px 28px;
    border-radius: 5px;
    font-size: 18px;
    font-variation-settings: 'wdth' 100, 'wght' 620;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    &:active {
        top: 1px;
        left: 1px;
    }
`;
