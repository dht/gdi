import styled from 'styled-components';

export const Wrapper = styled.div<{ barColor?: string }>`
    height: 10px;
    border-radius: 4px;
    overflow: hidden;
    background-color: ${(props) => props.barColor || '#445'};
    min-width: 100px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Inner = styled.div`
    flex: 1;
    height: 10px;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);

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
