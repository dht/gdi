import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    padding-bottom: 150px;
    background-color: white;

    ${mobile(css``)}
`;

export const H2 = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
    color: #334;

    ${mobile(css`
        text-align: center;
    `)}
`;

export const Container = styled(Grid.Container)`
    padding: 50px 0;
`;
