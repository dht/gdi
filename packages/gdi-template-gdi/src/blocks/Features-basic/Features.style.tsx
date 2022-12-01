import styled, { css } from 'styled-components';
import { mobile } from '../Base.style';

export const Container = styled.div`
    flex: 1;
    padding-top: 70px;
    padding-bottom: 150px;
    background-color: white;
`;

export const H2 = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0 0 20px;

    span {
        color: goldenrod;
        font-size: 22px;
    }
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    color: #333;

    ${mobile(css`
        width: 380px;
        margin: 0 30px;
    `)}
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${mobile(css`
        flex-direction: column;
    `)}
`;

export const Column = styled.div`
    flex: 1;
`;

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
