import styled from 'styled-components';
import { HeroColors } from './Hero';
import { darken, invert } from 'polished';

export const Container = styled.div<{ colors: HeroColors }>`
    background-color: ${(props) => props.colors.background || '#1a7870'};
    height: 30vh;
    display: flex;
    background-size: cover;
    background-position: center center;
    position: relative;

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    1 @media (max-width: 768px) {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Slogan = styled.div<{ colors: HeroColors }>`
    color: ${(props) => props.colors.text || '#ff46d1'};
    font-size: 34px;
    font-weight: bold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 34px;
    }
`;

export const H1 = styled.h1<{ size: number }>`
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    margin: 0;
    font-size: ${(props) => props.size}px;
    text-shadow: 0 0 100px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 0.5),
        0 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    text-transform: uppercase;
    flex-direction: row;
    align-items: flex-start;
    font-family: 'Kanit', sans-serif;

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

export const DateText = styled.div`
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 100px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 0.5),
        0 0 5px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    padding: 5px 20px;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
`;
