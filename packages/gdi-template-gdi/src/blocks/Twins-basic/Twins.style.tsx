import styled from 'styled-components';
import { ButtonBase } from '../Base.style';

export const Container = styled.div`
    flex: 1;
    height: 750px;
    margin-bottom: 100px;
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    display: flex;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;

    &:first-child {
        margin-bottom: 100px;
    }
`;

export const Column = styled.div`
    flex: 1;
    padding: 50px;
`;

export const H2 = styled.h2`
    font-size: 40px;

    span {
        color: #f2c973;
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
    transform: rotate(-3deg);
`;
