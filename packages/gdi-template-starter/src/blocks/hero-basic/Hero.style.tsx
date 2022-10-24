import styled from 'styled-components';
import { HeroColors } from './Hero';
import { darken, invert } from 'polished';

export const Container = styled.div<{ colors: HeroColors }>`
    background-color: ${(props) => props.colors.background ?? '#334'};
    height: 90vh;
    display: flex;
    background-size: cover;
    background-position: center center;
    position: relative;

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }

    @media (min-height: 1400px) {
        height: 50vh;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ImageCredits = styled.div`
    flex: 1;
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 6px 10px;
    border-radius: 3px;
`;

export const ImageCreditsTitle = styled.div`
    font-size: 14px;
    color: #ccd;
    line-height: 18px;
`;

export const ImageCreditDescription = styled.div`
    font-size: 13px;
    color: #aab;
`;

export const Image = styled.img`
    max-width: 88vw;
    min-height: 300px;
`;

export const Details = styled.div`
    flex: 1;
`;

export const Slogan = styled.div<{ colors: HeroColors }>`
    color: ${(props) => props.colors.text ?? '#ff46d1'};
    font-size: 34px;
    font-weight: bold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 34px;
    }
`;

export const H1 = styled.h1<{ size: number }>`
    font-size: ${(props) => props.size}px;
    max-width: 400px;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 768px) {
        text-align: center;
        font-size: ${(props) => props.size}px;
        line-height: 58px;
    }
`;

export const Beta = styled.div`
    font-size: 22px;
    margin-left: 14px;
    opacity: 0.85;
    text-transform: uppercase;
    color: gold;
`;

export const P = styled.p`
    font-size: 24px;
    max-width: 500px;
    line-height: 34px;

    @media (max-width: 768px) {
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    }
`;

export const Actions = styled.div`
    margin-top: 70px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
`;

export const CTA = styled.a<{ colors: HeroColors }>`
    background-color: ${(props) => props.colors.text ?? '#ff46d1'};
    font-weight: bold;
    color: #334;
    text-decoration: none;
    font-size: 20px;
    padding: 10px 50px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            darken(0.1, props.colors.text ?? '#ff46d1')};
    }

    &:active {
        position: relative;
        bottom: 2px;
        left: 2px;
    }

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 15px 40px;
    }
`;

export const SecondButton = styled.a<{ colors: HeroColors }>`
    background-color: ${(props) => invert(props.colors.text ?? '#ff46d1')};
    font-weight: bold;
    color: #eee;
    text-decoration: none;
    font-size: 20px;
    padding: 10px 50px;
    border: none;
    border-radius: 20px;
    margin-left: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            invert(darken(0.1, props.colors.text ?? '#ff46d1'))};
    }

    &:active {
        position: relative;
        bottom: 2px;
        left: 2px;
    }

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 15px 40px;
    }
`;
