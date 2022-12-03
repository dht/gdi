import styled from 'styled-components';
import { mobile, Grid, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.theme.vh(20)} 0;
    display: flex;
    font-family: ${(props) => props.theme.fontFamily};
    color: #ccd;
`;

export const ContainerItem = styled.div`
    width: 650px;
    height: 404px;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;
    text-align: center;

    ${mobile(css`
        width: ${(props) => props.theme.vw(95)};
        height: ${(props) => props.theme.vh(75)};
    `)}
`;

export const Image = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 650px;
    height: 404px;
    position: absolute;
    top: 0;
    left: 0;

    ${mobile(css`
        width: ${(props) => props.theme.vw(95)};
        height: ${(props) => props.theme.vh(75)};
    `)}
`;

export const Content = styled.div`
    width: 650px;
    height: 404px;
    position: relative;
    overflow: hidden;

    ${mobile(css`
        width: ${(props) => props.theme.vw(95)};
        height: ${(props) => props.theme.vh(75)};
    `)}
`;

export const ContainerDots = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const Dot = styled.div<{ active?: boolean }>`
    width: 10px;
    height: 10px;
    margin: 0 3px;
    border: 1px solid #fff;
    background-color: ${(props) => (props.active ? '#eee' : 'transparent')};
    border-radius: 50%;
    cursor: pointer;

    ${mobile(css`
        width: 18px;
        height: 18px;
    `)}
`;

export const ContainerArrows = styled(Grid.Container)`
    height: 0;
    position: relative;
    z-index: 9;
`;

export const Arrow = styled.div`
    position: absolute;
    font-size: 50px;
    margin-top: 170px;
    background-color: #112;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    ${mobile(css`
        margin-top: 0;
        top: ${(props) => props.theme.vh(60)};
    `)}

    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    i {
        font-size: 40px;
        color: #555;
    }

    &:nth-child(1) {
        left: 0;
    }

    &:nth-child(2) {
        right: 0;
    }
`;

export const Quote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 650px;
    height: 404px;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;

    ${mobile(css`
        width: ${(props) => props.theme.vw(95)};
        height: ${(props) => props.theme.vh(75)};
    `)}
`;

export const QuoteContent = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const QuoteSign = styled.div`
    position: relative;
    right: 5px;

    i {
        font-size: 50px;
    }
`;

export const QuoteBody = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 25px;
    line-height: 1.5;
    text-align: center;
    font-variation-settings: 'wdth' 100, 'wght' 200;
    padding: 0 10px;

    ${mobile(css`
        font-size: 24px;
    `)}
`;

export const QuotePerson = styled.div`
    text-align: center;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const QuotePersonImage = styled.div<{ imageUrl: string }>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const QuotePersonName = styled.div`
    font-size: 22px;
    font-variation-settings: 'wdth' 100, 'wght' 450;
    margin-bottom: 7px;
`;

export const QuotePersonJobTitle = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
`;
