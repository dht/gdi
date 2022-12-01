import styled, { css } from 'styled-components';
import { mobile } from '../Base.style';

export const Container = styled.div`
    flex: 1;
    background-color: #223;
    color: #fff;
    padding: 50px 0;
    font-size: 18px;
`;

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;

    ${mobile(css`
        width: 380px;
    `)}
`;

export const Column = styled.div`
    flex: 1;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
`;

export const Li = styled.li`
    padding: 0 10px;
    margin: 0;
`;

export const A = styled.a`
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover {
        color: gold;
        text-decoration: underline;
    }

    &:active {
        position: relative;
        bottom: 1px;
        left: 1px;
    }
`;
