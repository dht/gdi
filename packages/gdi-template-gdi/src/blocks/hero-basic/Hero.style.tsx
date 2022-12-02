import styled, { css } from 'styled-components';
import { ButtonBase, mobile } from '../Base.style';

export const Container = styled.div`
    background-color: white;
    position: relative;
`;

export const Column = styled.div`
    flex: 1;

    ${mobile(css`
        &:last-child {
            display: none;
        }
    `)}
`;

export const Slogan = styled.div`
    font-size: 32px;
`;

export const H1 = styled.h1`
    padding: 0;
    margin: 18px 0 40px;
    font-size: 100px;
`;

export const Demo = styled.div`
    border-top: 2px solid #23221f;
    width: 500px;
    position: absolute;
    bottom: -5px;
    box-sizing: border-box;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
    width: 500px;
`;

export const Actions = styled.div`
    > a {
        margin-right: 10px;
    }
`;

export const Button = styled(ButtonBase)`
    box-shadow: 0 4px 14px rgb(247 206 130 / 50%);

    &:nth-child(1) {
        box-shadow: 0 4px 14px rgb(55 117 203 / 50%);
        background-color: #e81b7b;
        color: white;
    }
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 100px 0 100px;
    width: 1200px;
    margin: 0 auto;
    color: #334;
    position: relative;

    ${mobile(css`
        width: 99vw;
        flex-direction: column;
        margin: 0;
        text-align: center;
        padding: 100px 0 120px;
    `)}
`;
