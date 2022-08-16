import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: black;
    font-family: 'Encode Sans', sans-serif;
    margin-bottom: 20px;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1100px;
    margin: auto;
`;

export const MenuItem = styled.div`
    padding: 20px;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.1);

        a {
            color: #e81b7b;
        }
    }
`;

export const MenuItemLink = styled.a`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 15px;
    font-variation-settings: 'wdth' 25, 'wght' 650;
`;

export const Flex = styled.div`
    flex: 1;
`;
