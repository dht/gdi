import styled from 'styled-components';
import { SectionHeaderColors } from './SectionHeader';
import { css, mobile, Grid } from '@gdi/engine';

export const Wrapper = styled.div<{
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

export const Container = styled(Grid.Container)`
    align-items: center;
    justify-content: center;
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
