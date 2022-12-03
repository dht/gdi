import styled from 'styled-components';
import { BaseButton } from '../../components/Base.style';
import { mobile, Grid, css } from '@gdi/engine';

export const Wrapper = styled(Grid.Wrapper)`
    height: 60vh;
    font-family: ${(props) => props.theme.fontFamily};
    --bk-light: #112;
    color: #ccd;
    display: flex;

    > .content {
        flex: 1;
        align-items: center;
        justify-content: center;
        display: flex;
    }
`;

export const Container = styled(Grid.Container)`
    justify-content: center;
    align-items: center;
    flex: 1;

    ${mobile(css`
        margin: 0;
    `)}
`;

export const H3 = styled.h3`
    font-size: 50px;
    font-variation-settings: 'wdth' 130, 'wght' 200;

    ${mobile(css`
        font-size: 40px;
    `)}
`;

export const Button = styled(BaseButton)``;
