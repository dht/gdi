import styled from 'styled-components';
import { LineCtaColors } from './LineCta';
import { darken } from 'polished';

export const Container = styled.div<{ colors: LineCtaColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#f1e3e5'};
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 300px;

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

export const Message = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 44px;
    padding-left: 80px;
    color: #333;

    strong {
        padding-left: 14px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 0;
    }
`;

export const Button = styled(BaseButton)`
    color: white;
    background-color: palevioletred;

    @media (max-width: 768px) {
        height: auto;
        width: 300px;
        background-color: pink;
        margin-top: 30px;
        font-size: 30px;
        color: palevioletred;
    }
`;

export const CTA = styled.a<{ colors: LineCtaColors }>`
    background-color: ${(props) => props.colors.text || '#333'};
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
            darken(0.1, props.colors.text || '#333')};
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
