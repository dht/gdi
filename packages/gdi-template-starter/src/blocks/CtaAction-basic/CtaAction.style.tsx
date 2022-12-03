import styled from 'styled-components';
import { CtaActionColors } from './CtaAction';
import { BaseButton } from '../../components/Base.style';
import { mobile, Grid, css } from '@gdi/engine';

export const Wrapper = styled(Grid.Wrapper)`
    height: 60vh;
    font-family: ${(props) => props.theme.fontFamily};
    color: #ccd;
    --bk-light: gold;

    > .content {
        flex: 1;
        align-items: center;
        justify-content: center;
        display: flex;
    }
`;

export const Container = styled(Grid.Container)``;

export const Row = styled(Grid.Row)`
    align-items: center;
    justify-content: center;
`;

export const Column = styled(Grid.Column)``;

export const H3 = styled.h3`
    font-size: 50px;
    font-variation-settings: 'wdth' 130, 'wght' 200;
    margin-right: 40px;
`;

export const Button = styled(BaseButton)`
    color: #333;
    font-weight: 600;
`;
