import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    padding-top: 70px;
    padding-bottom: 150px;
    background-color: white;
    color: #333;
`;

export const H2 = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0 0 20px;

    span {
        color: goldenrod;
        font-size: 22px;
    }

    ${mobile(css`
        text-align: center;
    `)}
`;

export const Container = styled(Grid.Container)`
    ${mobile(css``)}
`;

export const Row = styled(Grid.Row)`
    ${mobile(css``)}
`;

export const Column = styled(Grid.Column)``;

export const H3 = styled.h3`
    font-size: 28px;
`;

export const Ul = styled.ul`
    font-size: 24px;
    line-height: 1.9;
`;

export const Li = styled.li`
    span {
        margin-left: 10px;
        color: goldenrod;
        font-size: 18px;
    }
`;
