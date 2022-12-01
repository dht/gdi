import styled, { css } from 'styled-components';
import { TesterColors } from './Tester';
import { darken } from 'polished';
import { mobile } from '../Base.style';

export const Container = styled.div<{ colors: TesterColors; imageUrl: string }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#1a7870'};
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center center;
    height: ${(props) => props.theme.vh(60)};
    max-height: 800px;
    display: flex;

    ${mobile(css`
        width: 100vw;
        flex-direction: column;
    `)}
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
`;

export const ImageWrapper = styled.div`
    flex: 1;
`;

export const Image = styled.img`
    max-width: ${(props) => props.theme.vw(18)};
    min-height: 300px;
`;

export const Details = styled.div`
    flex: 1;
`;

export const H1 = styled.h1`
    font-size: 42px;
    max-width: 400px;
`;

export const Actions = styled.div`
    margin-top: 70px;
`;

export const CTA = styled.a<{ colors: TesterColors }>`
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
