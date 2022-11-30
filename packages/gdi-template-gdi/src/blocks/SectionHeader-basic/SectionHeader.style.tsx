import styled, { css } from 'styled-components';
import { mobile } from '../Base.style';
import { SectionHeaderColors } from './SectionHeader';

export const Container = styled.div<{
    hidden?: boolean;
    colors: SectionHeaderColors;
}>`
    flex: 1;
    height: ${(props) => (props.hidden ? 0 : '100px')};
    overflow: hidden;
    display: flex;
    background-color: #223;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Wrapper = styled.div`
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
    }
`;

export const Text = styled.h1`
    color: #889;
    font-size: 42px;

    font-variation-settings: 'wdth' 100, 'wght' 250;

    ${mobile(css`
        text-align: center;
        font-size: 42px;
    `)}
`;
