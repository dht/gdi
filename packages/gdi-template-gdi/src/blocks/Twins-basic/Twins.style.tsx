import styled from 'styled-components';
import { ButtonBase } from '../../components/Button/Button.style';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled(Grid.Wrapper)`
    flex: 1;
    height: 750px;
    margin-bottom: 100px;
    background-color: white;

    > .content {
        flex: 1;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    ${mobile(css`
        --rotation: 0deg;
        height: 1600px;
    `)}
`;

export const Container = styled(Grid.Container)`
    padding: 50px 0;
    display: flex;
    color: #fff;

    ${mobile(css`
        width: 99vw;
        flex-direction: column;
        margin: 0;
    `)}
`;

export const Row = styled(Grid.Row)`
    align-items: center;

    &:first-child {
        margin-bottom: 100px;
    }

    ${mobile(css`
        width: 100vw;
        flex-direction: column;
    `)}
`;

export const Column = styled(Grid.Column)`
    ${mobile(css`
        box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.15);
        padding: 100px 30px 100px;
    `)}
`;

export const H2 = styled.h2`
    font-size: 40px;

    span {
        color: #f2c973;
    }

    &.pink {
        span {
            color: pink;
        }
    }
`;

export const P = styled.div`
    color: #dde;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 40px;
`;

export const Button = styled(ButtonBase)`
    text-decoration: none;
`;

export const Notes = styled.div`
    line-height: 20px;
    opacity: 0.5;
    transform: rotate(var(--rotation));

    ${mobile(css`
        box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.1);
        padding: 0 30px;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
    `)}
`;
