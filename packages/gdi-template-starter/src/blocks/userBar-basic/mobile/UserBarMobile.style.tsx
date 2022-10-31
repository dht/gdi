import styled from 'styled-components';
import { darken, invert } from 'polished';
import { UserBarColors } from './UserBarMobile';

export const Container = styled.div`
    height: 80px;
    padding: 12px 40px 12px 0;
    position: fixed;
    top: 0;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}    
    z-index: 2;
    transition: all 350ms linear;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.green {
        --color-1: rgb(26, 120, 75);
        --color-2: rgb(170, 239, 105);
        --text: rgba(255, 255, 255, 1);
        --text-dark: rgb(26, 120, 75);

        &.inverted {
            --color-1: rgba(255, 255, 255, 0.8);
            --color-2: rgb(170, 239, 105);
            --text: rgb(26, 120, 75);
        }
    }

    &.purple {
        --color-1: rgb(112, 71, 145);
        --color-2: rgb(239, 105, 208);
        --text: rgba(255, 255, 255, 1);
        --text-dark: rgb(95, 34, 141);

        &.inverted {
            --color-1: rgba(255, 255, 255, 0.8);
            --color-2: rgb(239, 105, 208);
            --text: rgb(137, 84, 181);
        }
    }

    &.white {
        --color-1: rgba(255, 255, 255, 1);
        --color-2: #fffd94;
        --text: rgb(30, 30, 30);
        --text-dark: rgb(30, 30, 30);

        &.inverted {
            --color-1: rgba(255, 255, 255, 0.8);
            --color-2: #fffd94;
            --text: rgb(30, 30, 30);
        }
    }

    background-color: var(--color-1);

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Hamburger = styled.span`
    color: var(--text);
    font-size: 60px;
`;

export const Flex = styled.div`
    flex: 1;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}    
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 120ms ease-in-out;

    &.on {
        opacity: 1;
        pointer-events: all;
    }
`;

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    ${(props) => props.theme.right(0)}
    width: 400px;
    bottom: 0;
    background-color: white;
    border: 1px solid white;
    transform: translateX(410px);
    pointer-events: none;
    transition: transform 100ms ease-in-out;

    img {
        height: 60px;
    }

    &.on {
        transform: translateX(0);
        pointer-events: all;
    }
`;

export const Link = styled.a`
    font-size: 30px;
    margin: 0 15px;
    white-space: nowrap;
    color: #333;
    text-decoration: none;
    transition: all 300ms linear;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 10px;

    &:hover {
        color: gold;
    }
`;

export const LinkLocal = styled.a`
    font-size: 30px;
    margin: 0 15px;
    white-space: nowrap;
    color: #333;
    text-decoration: none;
    transition: all 300ms linear;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 10px;

    &:hover {
        color: gold;
    }
`;

export const Actions = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const Action = styled.a<{ colors: UserBarColors }>`
    background-color: #ff46d1;
    font-weight: bold;
    color: #334;
    text-decoration: none;
    font-size: 20px;
    padding: 10px 50px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => darken(0.1, '#ff46d1')};
    }

    &:active {
        position: relative;
        bottom: 2px;
        ${(props) => props.theme.left('2px')}
    }

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 15px 40px;
    }
`;

export const Gap = styled.div`
    width: 100px;
`;
