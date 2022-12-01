import styled, { css } from 'styled-components';
import { ButtonBase, mobile } from '../Base.style';

export const Container = styled.div<{ rotation?: number }>`
    flex: 1;
    height: 750px;
    margin-bottom: 100px;
    background-color: white;
    --rotation: ${(props) => props.rotation || 0}deg;

    ${mobile(css`
        --rotation: 0deg;
        height: 1500px;
    `)}
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    display: flex;

    ${mobile(css`
        width: 99vw;
        flex-direction: column;
        margin: 0;
    `)}
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;

    &:first-child {
        margin-bottom: 100px;
    }

    ${mobile(css`
        width: 100vw;
        flex-direction: column;
    `)}
`;

export const Column = styled.div`
    flex: 1;
    padding: 50px;

    ${mobile(css`
        box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.15);
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
        padding: 30px;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
    `)}
`;
