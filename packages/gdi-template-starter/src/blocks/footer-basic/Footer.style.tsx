import styled, { css } from 'styled-components';
import { FooterColors } from './Footer';
import { darken } from 'polished';
import { mobile } from '../Base.style';

export const Container = styled.div<{ colors: FooterColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#223'};
    display: flex;
    padding: 40px 0;
    font-family: ${(props) => props.theme.fontFamily};

    ${mobile(css`
        height: auto;
        max-height: none;
        padding: 80px 20px;
    `)}
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    ${mobile(css`
        flex-direction: column;
    `)}
`;

export const Copy = styled.div`
    font-size: 20px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
`;
