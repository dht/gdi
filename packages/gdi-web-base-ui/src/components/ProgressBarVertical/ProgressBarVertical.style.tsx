import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    display: flex;
`;

export const Inner = styled.div`
    width: 20px;
    height: 100px;
    position: absolute;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    bottom: 0;
    border-radius: 10px 10px 0 0;

    &:after {
        content: ' ';
        ${(props) => props.theme.left(0)}
        ${(props) => props.theme.right(0)}
        top: 0;
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
