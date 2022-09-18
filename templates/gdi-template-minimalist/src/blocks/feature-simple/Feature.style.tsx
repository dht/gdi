import styled from 'styled-components';
import { FeatureColors } from './Feature';
import { darken } from 'polished';

export const Container = styled.div<{ colors: FeatureColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#1e3a5a'};
    height: 800px;
    display: flex;
    position: relative;
    background-image: #f7f7f7;
    background-size: 25px 25px;

    &.even {
        background-color: ${(props) =>
            darken(0.03, props.colors.background || '#fff')};

        .wrapper {
            flex-direction: row-reverse;
        }
    }

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
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

export const ImageWrapper = styled.div`
    flex: 1;
    text-align: center;
`;

export const Image = styled.img`
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0 0 40px 5px rgba(255, 255, 255, 0.3);

    &.hidden {
        opacity: 0;
    }
`;

export const Details = styled.div`
    flex: 1;

    &.hidden {
        opacity: 0;
    }
`;

export const Slogan = styled.div<{ colors: FeatureColors }>`
    color: ${(props) => props.colors.text || '#77b63c'};
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 42px;
    }
`;

export const H1 = styled.h1`
    font-size: 42px;
    max-width: 400px;
    color: #334;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 45px;
        line-height: 58px;
    }
`;

export const P = styled.p`
    font-size: 20px;
    max-width: 400px;
    line-height: 29px;
    color: #556;

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

export const CTA = styled.a<{ colors: FeatureColors }>`
    background-color: ${(props) => props.colors.text || '#77b63c'};
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
            darken(0.1, props.colors.text || '#77b63c')};
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
