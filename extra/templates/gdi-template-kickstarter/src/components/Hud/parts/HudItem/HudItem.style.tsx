import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    opacity: 1;

    &.fadeOut {
        animation: fadeOut 300ms linear forwards;
        animation-delay: 0.3s;
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

export const Svg = styled.svg`
    position: absolute;
    top: -10px;
    left: -10px;
`;

export const Text = styled.div<{
    color: string;
    isLeft?: boolean;
    isTextOnBottom?: boolean;
}>`
    max-width: 190px;
    transform: translate(
        ${(props) => (props.isLeft ? -220 : 220)}px,
        ${(props) => (props.isTextOnBottom ? '50%' : '-50%')}
    );
    width: 200px;
    height: 75px;
    position: absolute;
    color: #fff;
    text-shadow: 0 0 0.7px #fff, 0 0 1px #fff, 0 0 2.1px #fff,
        0 0 4.2px ${(props) => props.color}, 0 0 8.2px ${(props) => props.color},
        0 0 9.2px ${(props) => props.color},
        0 0 10.2px ${(props) => props.color},
        0 0 15.1px ${(props) => props.color};
    font-size: 28px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
    left: ${(props) => (props.isLeft ? 0 : 'auto')};
    right: ${(props) => (!props.isLeft ? 0 : 'auto')};
    top: ${(props) => (!props.isTextOnBottom ? 0 : 'auto')};
    bottom: ${(props) => (props.isTextOnBottom ? 0 : 'auto')};
    animation: fadeIn 600ms linear forwards;
    opacity: 0;
    animation-delay: 0.3s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;
