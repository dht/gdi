import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    width: 1920px;
`;

export const Loading = styled.div`
    padding: 30px;
    color: #999;
    font-size: 24px;
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    text-align: center;

    @keyframes blink {
        0% {
            opacity: 1;
        }
        20% {
            opacity: 1;
        }
        50% {
            opacity: 0.1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
`;
