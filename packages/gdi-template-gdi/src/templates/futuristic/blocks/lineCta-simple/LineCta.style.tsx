import styled from 'styled-components';
import { LineCtaColors } from './LineCta';
import { darken } from 'polished';

export const Container = styled.div<{ colors: LineCtaColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#fff'};
    height: 400px;
    display: flex;
    --grid: rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 25px 25px;

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

export const Details = styled.div`
    flex: 1;
`;

export const Text = styled.div`
    color: #333;
    font-size: 50px;

    strong {
        margin-right: 30px;
    }
`;

export const Actions = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
`;

export const Cta = styled.a<{ colors: LineCtaColors }>`
    background-color: ${(props) => props.colors.text || '#111'};
    font-weight: bold;
    color: #eee;
    text-decoration: none;
    font-size: 24px;
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

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 15px 40px;
    }
`;
