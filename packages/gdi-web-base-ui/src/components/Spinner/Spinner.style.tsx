import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div,
    &::after {
        box-sizing: border-box;
    }

    &.dualRing {
        &::after {
            content: ' ';
            display: block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            border: 6.4px solid currentColor;
            border-color: currentColor transparent currentColor transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }

        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }

    &.ellipsis {
        div {
            position: absolute;
            top: 33.33333px;
            width: 13.33333px;
            height: 13.33333px;
            border-radius: 50%;
            background: currentColor;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);

            &:nth-child(1) {
                left: 8px;
                animation: lds-ellipsis1 0.6s infinite;
            }
            &:nth-child(2) {
                left: 8px;
                animation: lds-ellipsis2 0.6s infinite;
            }
            &:nth-child(3) {
                left: 32px;
                animation: lds-ellipsis2 0.6s infinite;
            }
            &:nth-child(4) {
                left: 56px;
                animation: lds-ellipsis3 0.6s infinite;
            }
        }

        @keyframes lds-ellipsis1 {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes lds-ellipsis3 {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
        @keyframes lds-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(24px, 0);
            }
        }
    }

    &.facebook {
        div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: currentColor;
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

            &:nth-child(1) {
                left: 8px;
                animation-delay: -0.24s;
            }
            &:nth-child(2) {
                left: 32px;
                animation-delay: -0.12s;
            }
            &:nth-child(3) {
                left: 56px;
                animation-delay: 0s;
            }

            @keyframes lds-facebook {
                0% {
                    top: 8px;
                    height: 64px;
                }
                50%,
                100% {
                    top: 24px;
                    height: 32px;
                }
            }
        }
    }

    &.grid {
        div {
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: currentColor;
            animation: lds-grid 1.2s linear infinite;

            &:nth-child(1) {
                top: 8px;
                left: 8px;
                animation-delay: 0s;
            }
            &:nth-child(2) {
                top: 8px;
                left: 32px;
                animation-delay: -0.4s;
            }
            &:nth-child(3) {
                top: 8px;
                left: 56px;
                animation-delay: -0.8s;
            }
            &:nth-child(4) {
                top: 32px;
                left: 8px;
                animation-delay: -0.4s;
            }
            &:nth-child(5) {
                top: 32px;
                left: 32px;
                animation-delay: -0.8s;
            }
            &:nth-child(6) {
                top: 32px;
                left: 56px;
                animation-delay: -1.2s;
            }
            &:nth-child(7) {
                top: 56px;
                left: 8px;
                animation-delay: -0.8s;
            }
            &:nth-child(8) {
                top: 56px;
                left: 32px;
                animation-delay: -1.2s;
            }
            &:nth-child(9) {
                top: 56px;
                left: 56px;
                animation-delay: -1.6s;
            }
            @keyframes lds-grid {
                0%,
                100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.5;
                }
            }
        }
    }

    &.ripple {
        div {
            position: absolute;
            border: 4px solid currentColor;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

            &:nth-child(2) {
                animation-delay: -0.5s;
            }
        }

        @keyframes lds-ripple {
            0% {
                top: 36px;
                left: 36px;
                width: 8px;
                height: 8px;
                opacity: 0;
            }
            4.9% {
                top: 36px;
                left: 36px;
                width: 8px;
                height: 8px;
                opacity: 0;
            }
            5% {
                top: 36px;
                left: 36px;
                width: 8px;
                height: 8px;
                opacity: 1;
            }
            100% {
                top: 0;
                left: 0;
                width: 80px;
                height: 80px;
                opacity: 0;
            }
        }
    }
`;
