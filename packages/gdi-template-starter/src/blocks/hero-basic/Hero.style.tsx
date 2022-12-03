import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: HeroExtra }>`
    flex: 1;
    background-image: url(${(props) => props.extra.imageUrl});
    background-size: cover;
    background-position: center bottom;
    height: ${(props) => props.theme.vh(88)};
    display: flex;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const H1 = styled.h1`
    font-size: 42px;
    max-width: 400px;
    margin: 10px 0;
    padding: 0;
    font-variation-settings: 'wdth' 105, 'wght' 650;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
`;

export const Greeting = styled.div`
    color: #33334499;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
`;

export const Skill = styled.div`
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    margin-top: 2px;
    margin-bottom: 30px;
    font-variation-settings: 'wdth' 125, 'wght' 350;

    ${mobile(
        css`
            text-align: center;
        `
    )}
`;

export const Social = styled.div``;
