import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    margin-top: 10px;
    user-select: none;

    img {
        width: 160px;
    }

    &.animated {
        perspective: 800px;
        animation-name: rotate;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
    }

    @keyframes rotate {
        0% {
            transform: rotate3d(0.3, -0.4, -0.1, 0deg);
            opacity: 0;
        }
        100% {
            transform: rotate3d(0.3, -0.4, -0.1, 20deg);
            opacity: 1;
        }
    }
`;

export const Text = styled.div<{ size: number }>`
    flex: 1;
    font-size: ${(props) => props.size}px;
    transform: rotate3d(0.3, -0.4, -0.1, 10deg);
    bottom: 10px;
    position: relative;
    opacity: 0.3;
`;
