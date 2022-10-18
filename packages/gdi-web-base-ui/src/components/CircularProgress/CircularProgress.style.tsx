import styled from 'styled-components';

export const Container = styled.div<{ color?: string }>`
    width: 100px;
    height: 100px;
    position: relative;

    .spinner {
        background-color: ${(props) => props.color || '#0cb1c422'};
    }
`;

export const Spinner = styled.div`
    position: absolute;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 25px;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    &:nth-child(1) {
        animation-delay: 0ms;
        animation-duration: 5000ms;
    }

    &:nth-child(2) {
        animation-delay: 300ms;
        animation-duration: 6000ms;
    }

    &:nth-child(3) {
        animation-delay: 600ms;
        animation-duration: 7000ms;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
