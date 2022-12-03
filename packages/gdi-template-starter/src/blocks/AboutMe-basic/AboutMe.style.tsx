import styled from 'styled-components';
import { AboutMeColors } from './AboutMe';
import { darken } from 'polished';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled(Grid.Wrapper)`
    background-color: #111;
    height: ${(props) => props.theme.vh(80)};
    display: flex;
    font-family: ${(props) => props.theme.fontFamily};
    color: #fff;

    > .content {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    ${mobile(css`
        height: ${(props) => props.theme.vh(100)};
        background-image: none;
    `)}
`;

export const Container = styled(Grid.Container)`
    ${mobile(css``)}
`;

export const Row = styled(Grid.Row)`
    ${mobile(css``)}
`;

export const Column = styled(Grid.Column)``;

export const Details = styled.div``;

export const Slogan = styled.div<{ colors: AboutMeColors }>`
    color: #aaef69;
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
    background-color: #aaef69;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    font-size: 17px;
    padding: 10px 50px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => darken(0.1, '#aaef69')};
    }

    &:active {
        position: relative;
        bottom: 2px;
        left: 2px;
    }
`;
