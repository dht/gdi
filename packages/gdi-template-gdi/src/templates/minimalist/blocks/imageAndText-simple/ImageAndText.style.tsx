import styled from 'styled-components';
import { ImageAndTextColors } from './ImageAndText';
import { darken } from 'polished';

export const Container = styled.div<{ colors: ImageAndTextColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#333'};
    padding: 50px;
    display: flex;
    background-size: cover;
    min-height: 60vh;

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
    width: 1440px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    flex: 1;
`;

export const Image = styled.img`
    max-width: 500px;
`;

export const Details = styled.div``;

export const Slogan = styled.div<{ colors: ImageAndTextColors }>`
    color: ${(props) => props.colors.text || 'pink'};
    font-size: 42px;
    font-weight: bold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 42px;
    }
`;

export const H1 = styled.h1`
    font-size: 42px;
    max-width: 400px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 45px;
        line-height: 58px;
    }
`;

export const P = styled.p`
    font-size: 20px;
    max-width: 600px;
    line-height: 29px;

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

export const CTA = styled.a<{ colors: ImageAndTextColors }>`
    background-color: ${(props) => props.colors.text || 'pink'};
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
            darken(0.1, props.colors.text || 'pink')};
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
