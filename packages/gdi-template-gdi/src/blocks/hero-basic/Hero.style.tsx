import styled from 'styled-components';
import { ButtonBase } from '../../components/Button/Button.style';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    background-color: white;
    position: relative;
`;

export const Container = styled(Grid.Container)`
    padding: 100px 0;
`;

export const Row = styled(Grid.Row)``;

export const Column = styled(Grid.Column)`
    ${mobile(css`
        &:last-child {
            display: none;
        }
    `)}
`;

export const Slogan = styled.div`
    font-size: 32px;
`;

export const H1 = styled.h1`
    padding: 0;
    margin: 18px 0 40px;
    font-size: 100px;
`;

export const Demo = styled.div`
    border-top: 2px solid #23221f;
    width: 500px;
    position: absolute;
    bottom: -5px;

    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
    width: 500px;
`;

export const Actions = styled.div`
    > a {
        margin-right: 10px;
    }
`;

export const Button = styled(ButtonBase)`
    box-shadow: 0 4px 14px rgb(247 206 130 / 50%);

    &:nth-child(1) {
        box-shadow: 0 4px 14px rgb(55 117 203 / 50%);
        background-color: #e81b7b;
        color: white;
    }
`;
