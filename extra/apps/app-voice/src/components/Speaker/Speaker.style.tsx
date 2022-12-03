import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    zoom: 0.5;
`;

export const Circle = styled.div<{ animated: boolean }>`
    background-color: rgba(255, 255, 255, 0.1);
    width: 400px;
    height: 400px;
    border-radius: 200px;
    position: absolute;
    top: 50%;
    ${(props) => props.theme.left('50%')}
    margin-top: -200px;
    ${(props) => props.theme.marginLeft('-200px')}
    animation-fill-mode: forwards;
    box-shadow: 0 0 300px 100px rgba(255, 255, 255, 0.02);

    animation-name: ${(props) => (props.animated ? 'dance' : '')};

    &:nth-child(1) {
        background-color: rgba(255, 0, 0, 0.2);
        transform: translateY(-40px);
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 0.3s;
    }
    &:nth-child(2) {
        background-color: rgba(0, 255, 0, 0.2);
        transform: translateY(40px);
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-duration: 0.6s;
        animation-delay: 0.6s;
    }
    &:nth-child(3) {
        background-color: rgba(0, 0, 255, 0.2);
        transform: translateX(40px);
        animation-duration: 0.9s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 0.9s;
    }
    &:nth-child(4) {
        background-color: rgba(0, 255, 255, 0.2);
        transform: translateX(-40px);
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 1.2s;
    }
    &:nth-child(5) {
        background-color: rgba(255, 255, 255, 0.5);
        width: 320px;
        height: 320px;
        margin-top: -160px;
        ${(props) => props.theme.marginLeft('-160px')}
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 1.5s;
        box-shadow: 0 0 300px 100px rgba(255, 255, 255, 0.02);
    }

    @keyframes dance {
        0% {
            transform: scale(0.9) skew(100px);
        }
        25% {
            transform: scale(1.1) skew(20px);
        }

        50% {
            transform: scale(0.8) skew(0px);
        }

        75% {
            transform: scale(1.2);
        }
    }
`;
