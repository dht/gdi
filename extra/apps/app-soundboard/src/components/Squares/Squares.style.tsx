import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    user-select: none;
`;

export const Anim = styled.div`
    width: 50px;
    height: 50px;
    background-color: green;
    position: relative;
    animation-name: blink;
    animation-duration: 2200ms;
    animation-iteration-count: 1;

    @keyframes blink {
        0% {
            top: 0;
        }
        30% {
            top: 300px;
        }
        70% {
            top: 150px;
        }
        100% {
            top: 300;
        }
    }
`;
