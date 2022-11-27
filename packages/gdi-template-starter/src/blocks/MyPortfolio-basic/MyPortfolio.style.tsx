import styled, { css } from 'styled-components';
import { MyPortfolioColors } from './MyPortfolio';
import { darken } from 'polished';
import { mobile } from '../Base.style';

export const Container = styled.div<{ colors: MyPortfolioColors }>`
    flex: 1;
    background-color: #112;
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily};
    padding: 100px 0 90px;

    ${mobile(css`
        height: auto;
        max-height: none;
        padding: 80px 0;
    `)}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    flex: 1;
`;

export const Slogan = styled.div`
    font-size: 42px;
    font-weight: bold;

    ${mobile(css`
        text-align: center;
        font-size: 42px;
    `)}
`;

export const H2 = styled.h2`
    font-size: 37px;
    max-width: 400px;
    margin: 0;
    padding: 0;

    ${mobile(css`
        text-align: center;
        font-size: 45px;
        line-height: 58px;
    `)}
`;

export const Description = styled.p`
    font-size: 18px;
    max-width: 500px;
    text-align: center;
    line-height: 29px;
    margin-bottom: 80px;

    ${mobile(css`
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    `)}
`;

export const Portfolio = styled.div`
    display: flex;
    flex: 1;
    min-width: 1200px;

    ${mobile(css`
        min-width: ${(props) => props.theme.vw(100)};
    `)}
`;
