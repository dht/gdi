import styled from 'styled-components';
import { MyServicesColors } from './MyServices';
import { darken } from 'polished';

export const Container = styled.div<{ colors: MyServicesColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#223'};
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily};
    padding: 100px 0 90px;

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
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Slogan = styled.div`
    font-size: 42px;
    font-weight: bold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 42px;
    }
`;

export const H2 = styled.h2`
    font-size: 37px;
    max-width: 400px;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 45px;
        line-height: 58px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    max-width: 500px;
    text-align: center;
    line-height: 29px;
    margin-bottom: 80px;

    @media (max-width: 768px) {
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    }
`;

export const Portfolio = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
