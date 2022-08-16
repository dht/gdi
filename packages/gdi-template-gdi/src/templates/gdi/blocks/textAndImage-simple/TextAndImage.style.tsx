import styled from 'styled-components';
import { TextAndImageColors } from './TextAndImage';

export const Container = styled.div<{ colors: TextAndImageColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || 'white'};

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

export const Section = styled.section`
    position: absolute;
    top: -50px;
`;

export const ContainerFeature = styled.div`
    align-self: stretch;
    background-color: white;
    color: #373;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 70px 0;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    &:nth-child(2n-1) {
        background-color: #f3faf3;

        .wrapper {
            flex-direction: row-reverse;

            @media (max-width: 768px) {
                width: auto;
                flex-direction: column;
            }
        }
    }
`;

export const Details = styled.div`
    flex: 1;
`;

export const Slogan = styled.div`
    font-size: 25px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 35px;
        margin-bottom: 6px;
    }
`;

export const H2 = styled.div`
    font-size: 50px;
    font-weight: bold;
`;

export const P = styled.p`
    font-size: 24px;
    max-width: 500px;
    line-height: 32px;

    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 44px;
        font-weight: 300;
    }
`;

export const ImageWrapper = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        margin: auto;
    }
`;

export const Image = styled.img<{ wide?: boolean }>`
    max-width: ${(props) => (props.wide ? '500px' : '400px')};
`;
