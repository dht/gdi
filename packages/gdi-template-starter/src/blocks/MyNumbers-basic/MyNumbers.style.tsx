import styled from 'styled-components';
import { MyNumbersColors } from './MyNumbers';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    display: flex;
    padding: 100px 0;
    font-family: ${(props) => props.theme.fontFamily};
    color: #ccd;

    ${mobile(css`
        height: auto;
        max-height: none;
        padding: 80px 0;
    `)}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
`;

export const Row = styled(Grid.Row)`
    align-items: center;

    ${mobile(css`
        flex-direction: column;
    `)}
`;

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

export const IconWrapper = styled.div`
    width: 100px;
    height: 70px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 44px;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    padding: 0;
    margin: 0 0 20px;
`;

export const Value = styled.div`
    font-size: 44px;
    padding: 0;
    margin: 0 0 10px;
`;
