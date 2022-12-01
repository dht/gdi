import styled, { css } from 'styled-components';
import { mobile } from '../Base.style';

export const Container = styled.div`
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

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;

    ${mobile(css`
        width: 99vw;
        margin: 0;
    `)}
`;
