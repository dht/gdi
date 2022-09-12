import styled from 'styled-components';

export const Container = styled.div`
    height: 10px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #445;
    min-width: 100px;
`;

export const Inner = styled.div`
    flex: 1;
    height: 10px;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);

    &:after {
        content: ' ';
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.2) 10px,
            rgba(0, 0, 0, 0.2) 21px
        );
        background-size: 30px 30px;
    }

    &.animated {
        &:after {
            animation: move 0.4s linear infinite;
        }
    }

    @keyframes move {
        from {
            background-position: 0;
        }
        to {
            background-position: 30px;
        }
    }
`;
