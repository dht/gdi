import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    {props => props.theme.left(80)}
    width: 370px;
    height: 200px;
    background-size: contain;
    ${(props) =>
        props.theme.backgroundImageRtl(
            '/studio-logo-bk.png',
            '/studio-logo-bk-rtl.png'
        )}
    ${(props) => props.theme.animationNameRtl('rotate', 'rotate-rtl')}
    background-repeat: no-repeat;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    z-index: 1000;
    

    ${device(
        '1080p',
        css`
            {props => props.theme.left(40)}
            zoom: 0.7;
        `
    )}

    @keyframes rotate {
        0% {
            transform: perspective(700px) rotate3d(-0.3, 1, 0, 6deg);
        }
        100% {
            transform: perspective(700px) rotate3d(-0.3, 1, 0, 40deg);
        }
    }

    @keyframes rotate-rtl {
        0% {
            transform: perspective(700px) rotate3d(-0.3, 1, 0, -6deg);
        }
        100% {
            transform: perspective(700px) rotate3d(-0.3, 1, 0, -40deg);
        }
    }
`;

export const Arrows = styled.div`
    width: 140px;
    height: 50px;
    position: absolute;
    ${(props) => props.theme.right(0)}
    top: 15px;
    display: flex;
    ${(props) => props.theme.flexDirection()};
    align-items: center;
`;

export const Arrow = styled.div`
    flex: 1;
    color: #223;
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
    }
`;

export const Content = styled.div`
    position: absolute;
    top: 60px;
    ${(props) => props.theme.left(80)}
    width: 240px;
`;

export const Text = styled.div`
    margin-top: 20px;
    color: #ffa600;
    font-variation-settings: 'wdth' 70, 'wght' 300;
    font-size: 55px;
    text-align: center;
    text-transform: uppercase;
`;

export const Flavour = styled.img`
    height: 50px;
    color: #ffa600;
    ${(props) => props.theme.floatRight()}
    position: relative;
    top: -20px;
`;

export const GDI = styled.div`
    position: absolute;
    top: -38px;
    ${(props) => props.theme.left(-20)}
    width: 60px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/studio-logo-gdi.png);
`;
