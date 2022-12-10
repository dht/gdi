import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily};
    min-height: ${(props) => props.theme.vh(70)};
    color: #ccd;

    ${mobile(css`
        padding: 100px 0;
    `)}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    flex: 1;
`;

export const H2 = styled.h2`
    font-size: 37px;
    max-width: 400px;
    margin: 0;
    padding: 0;

    ${mobile(css`
        margin-top: 40px;
        text-align: center;
        font-size: 40px;
        line-height: 58px;
    `)}
`;

export const Description = styled.p`
    font-size: 18px;
    max-width: 500px;
    text-align: center;
    line-height: 29px;
    margin-bottom: 80px;

    ${mobile(css`
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    `)}
`;

export const ServiceIcon = styled.div`
    width: 100px;
    height: 70px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 50px;
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 24px;
    padding: 0;
    margin: 0 0 20px;
    text-align: center;
`;

export const ServiceDescription = styled.p`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0;
    margin: 0;
    text-align: center;
    line-height: 1.5;
    min-height: 100px;
`;

export const Row = styled(Grid.Row)``;

export const Column = styled(Grid.Column)`
    width: 300px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 6px;
`;
