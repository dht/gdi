import styled from 'styled-components';
import { $CMPColors } from './$CMP';
import { darken } from 'polished';

export const Container = styled.div<{ colors: $CMPColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background ?? '#1a7870'};
    height: 60vh;
    max-height: 800px;
    display: flex;
`;

export const Wrapper = styled.div`
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
    max-width: 88vw;
    min-height: 300px;
`;

export const Details = styled.div`
    flex: 1;
`;

export const Slogan = styled.div<{ colors: $CMPColors }>`
    color: ${(props) => props.colors.text ?? '#aaef69'};
    font-size: 42px;
    font-weight: bold;
`;

export const H1 = styled.h1`
    font-size: 42px;
    max-width: 400px;
`;

export const P = styled.p`
    font-size: 20px;
    max-width: 400px;
    line-height: 29px;
`;

export const Actions = styled.div`
    margin-top: 70px;
`;

export const CTA = styled.a<{ colors: $CMPColors }>`
    background-color: ${(props) => props.colors.text ?? '#aaef69'};
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
            darken(0.1, props.colors.text ?? '#aaef69')};
    }

    &:active {
        position: relative;
        bottom: 2px;
        ${(props) => props.theme.left('2px')}
    }
`;
