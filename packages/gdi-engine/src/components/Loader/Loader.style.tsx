import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: relative;

    > div {
        width: 50px;
        height: 50px;
        background-color: rgba(255, 205, 105, 0.3);
        border-radius: 10px;
        position: absolute;
        top: 0;
        ${(props) => props.theme.left(0)}
        border: 1px solid orange;
        animation: rotate 4s linear infinite;
        box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.2);

        &:nth-child(1) {
            transform: rotate(0deg);
            animation-duration: 1s;
            opacity: 0.5;
        }

        &:nth-child(2) {
            transform: rotate(45deg);
            animation-duration: 2s;
        }

        &:nth-child(3) {
            transform: rotate(90deg);
            animation-duration: 3s;
        }

        &:nth-child(4) {
            transform: rotate(135deg);
            animation-duration: 4s;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
