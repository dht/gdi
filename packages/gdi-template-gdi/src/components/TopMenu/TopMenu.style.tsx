import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: black;
    font-family: 'Encode Sans', sans-serif;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1100px;
    margin: auto;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 0 gold;
`;

export const MenuItem = styled.div`
    padding: 20px;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.1);

        a {
            color: #f2c973;
        }
    }
`;

export const MenuItemLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-variation-settings: 'wdth' 100, 'wght' 550;
`;

export const Flex = styled.div`
    flex: 1;
`;

export const Github = styled.a`
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        opacity: 1;
    }

    &:active {
        position: relative;
        top: 1px;
        left: 1px;
    }
`;
