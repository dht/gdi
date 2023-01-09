import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    font-family: 'Bitter';
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(/green-dirty-blackboard.jpg);
    background-size: cover;
    background-position: center;
`;

export const Container = styled(Grid.Container)``;

export const Row = styled(Grid.Row)`
    align-items: center;
`;

export const Column = styled(Grid.Column)``;

export const H2 = styled.h2`
    font-size: 50px;
    font-variation-settings: 'wdth' 100, 'wght' 300;

    span {
        display: block;
        font-size: 60px;
        font-variation-settings: 'wdth' 130, 'wght' 800;
        text-transform: uppercase;
    }
`;

export const Your = styled.div`
    font-size: 30px;
    margin-bottom: 10px;
`;

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 10px 0 50px;
    font-size: 34px;
    line-height: 1.9;
`;

export const Li = styled.li`
    padding: 0;
    margin-left: 10px;

    &::before {
        content: '✔ ';
        position: relative;
        left: -10px;
    }
`;

export const Image = styled.img`
    width: 500px;
    transform: perspective(1000px) rotateY(-20deg);
    position: relative;
    left: 100px;
`;

export const Button = styled.img``;
