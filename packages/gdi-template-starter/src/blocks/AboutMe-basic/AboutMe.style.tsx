import styled, { css } from 'styled-components';
import { AboutMeColors } from './AboutMe';
import { darken } from 'polished';
import { mobile } from '../Base.style';

export const Container = styled.div<{ imageUrl: string }>`
    flex: 1;
    background-color: #111;
    height: 60vh;
    max-height: 800px;
    display: flex;
    font-family: ${(props) => props.theme.fontFamily};
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center center;

    ${mobile(css`
        height: 100vh;
        background-image: none;
    `)}

    &&:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 39%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0.85) 49%,
            rgba(0, 0, 0, 0.95) 100%
        );

        ${mobile(css`
            display: none;
        `)}
    }
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;
    width: 1440px;

    ${mobile(css`
        width: 380px;
        flex-direction: column;
    `)}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

export const Details = styled.div`
    box-sizing: border-box;
`;

export const Slogan = styled.div<{ colors: AboutMeColors }>`
    color: ${(props) => props.colors.text || '#aaef69'};
    font-size: 28px;
    font-weight: bold;
    font-variation-settings: 'wdth' 95, 'wght' 250;
    margin-bottom: 10px;

    ${mobile(css`
        text-align: center;
        font-size: 25px;
    `)}
`;

export const H2 = styled.h2`
    font-size: 34px;
    line-height: 1.4;
    max-width: 500px;
    margin: 0 0 20px;

    ${mobile(css`
        max-width: 300px;
    `)}
`;

export const P = styled.p`
    font-size: 24px;
    max-width: 600px;
    line-height: 38px;
    font-variation-settings: 'wght' 250;
    padding: 0;
    margin: 0;

    ${mobile(css`
        display: none;
    `)}
`;

export const Actions = styled.div`
    margin-top: 70px;
`;

export const CTA = styled.a<{ colors: AboutMeColors }>`
    background-color: ${(props) => props.colors.text || '#aaef69'};
    font-weight: bold;
    color: #333;
    text-decoration: none;
    font-size: 17px;
    padding: 10px 50px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            darken(0.1, props.colors.text || '#aaef69')};
    }

    &:active {
        position: relative;
        bottom: 2px;
        left: 2px;
    }
`;
