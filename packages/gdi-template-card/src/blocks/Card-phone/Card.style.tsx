import styled from 'styled-components';
import { CardColors } from './Card';
import { darken } from 'polished';

export const Container = styled.div<{ colors: CardColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#223'};
    height: 60vh;
    height: 1100px;
    display: flex;
    max-width: 600px;
    border: 1px solid green;
    margin: 0 auto;

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

export const Content = styled.div``;

export const Name = styled.div``;

export const Top = styled.div``;

export const Center = styled.div``;

export const Bottom = styled.div``;
