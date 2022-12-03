import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: black;
    font-family: 'Encode Sans', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1100px;
    margin-left: 200px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 0 gold;

    ${mobile(css`
        display: none;
    `)}
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
    font-variation-settings: 'wdth' 110, 'wght' 650;
`;
