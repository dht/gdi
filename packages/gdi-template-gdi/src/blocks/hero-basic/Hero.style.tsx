import styled from 'styled-components';
import { ButtonBase } from '../Base.style';

export const Container = styled.div`
    background-color: white;
`;

export const Column = styled.div`
    flex: 1;
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
    max-width: 600px;
    top: 50px;
    width: 500px;
    height: 800px;
    position: absolute;
`;

export const DemoTop = styled.div`
    box-shadow: 0 0 356px 0 rgb(130 215 247 / 60%);
    width: 500px;
    height: 400px;
    position: absolute;
`;

export const DemoBottom = styled.div`
    box-shadow: 0 0 356px 0 rgb(130 215 247 / 20%);
    width: 500px;
    height: 400px;
    position: absolute;
    top: 400px;
`;

export const Image = styled.img`
    width: 500px;
    position: absolute;
    top: 0;
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

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 500px;
    width: 1200px;
    margin: 0 auto;
    color: #334;
    position: relative;
`;
