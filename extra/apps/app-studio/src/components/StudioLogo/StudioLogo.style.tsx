import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 80px;
    width: 450px;
    height: 250px;
    background-size: contain;
    background-image: url(/ville-a.png);
    background-repeat: no-repeat;
    animation-name: rotate;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    z-index: 1000;

    ${device(
        '1080p',
        css`
            left: 40px;
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
`;

export const Arrows = styled.div`
    width: 140px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 40px;
    display: flex;
    flex-direction: row;
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
