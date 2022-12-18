import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    background-image: linear-gradient(
        180deg,
        #00000066 0%,
        #222233ff 20%,
        #222233ff 90%,
        #00000067 100%
    );
    position: relative;
    flex-direction: column;
    min-height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
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
    left: 0;
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.3);
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
