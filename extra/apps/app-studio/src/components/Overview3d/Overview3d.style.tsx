import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
        180deg,
        #00000066 0%,
        #222233ff 20%,
        #222233ff 90%,
        #00000067 100%
    );
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;

    &:nth-child(1) {
        max-width: 700px;
        margin: 0 30px;
    }

    &:nth-child(2) {
        margin: 4px;
        overflow: auto;

        @media (max-width: 1340px) {
            max-height: calc(100vh - 130px);
        }
    }
`;

export const Resolution = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.63);
    color: #eee;
    direction: ltr;
    animation-name: fadeOut;
    animation-delay: 2s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const Patch = styled.div`
    display: none;

    ${device(
        '1080p',
        css`
            display: block;
            position: absolute;
            top: 0;
            right: -50px;
            width: 50px;
            height: 350px;
            background-color: #ebf7ff;
        `
    )}
`;

export const WrapperBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #112;
    display: flex;
`;
