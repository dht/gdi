import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    perspective: 800px;
    animation-name: rotate;
    animation-duration: 500ms;
    animation-fill-mode: forwards;

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
