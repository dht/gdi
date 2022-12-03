import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 0;
    height: 0;
    user-select: none;
    position: absolute;
    top: 50px;
    z-index: 3;
    transition: all 50ms ease-out;
`;

export const Trigger = styled.div`
    position: absolute;
    width: 50px;
    height: 40px;
    border-radius: 30px;
    transform: translate(
        ${(props) => (props.theme.isRtl ? '50%' : '-50%')},
        -50%
    );
    cursor: pointer;
    transition: all 500ms ease-out;

    &:hover {
    }

    &:active {
        background-color: palevioletred;
    }
`;

export const Point = styled.div`
    position: absolute;
    transition: all 100ms ease-out;
    top: 0;
    ${(props) => props.theme.left(0)}
    width: 3px;
    height: 3px;
`;

export const PointInner = styled.div`
    background-color: #112;
    padding: 5px 15px;
    box-shadow: 0 0 10px 15px rgba(0, 0, 0, 0.2);
    border: 2px solid #99a;
    border-radius: 8px;
    white-space: nowrap;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    position: absolute;

    &.topLeft {
        bottom: 0;
        ${(props) => props.theme.right(0)}
        flex-direction: row-reverse;
    }

    &.topRight {
        bottom: 0;
        ${(props) => props.theme.left(0)}
    }

    &.bottomLeft {
        top: 0;
        ${(props) => props.theme.right(0)}
        flex-direction: row-reverse;
    }

    &.bottomRight {
        top: 0;
        ${(props) => props.theme.left(0)}
    }

    &:hover {
        background-color: #e2326d;
        border: 2px solid #333;

        .key {
            color: gold;
        }

        span {
            &.capital {
                color: gold;
            }
        }
    }

    &:active,
    &.keyboardOn {
        transform: translateX(2px) translateY(-2px);
        background-color: #e92667;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        border: 1px solid #333;

        .key {
            color: gold;
        }

        span {
            &.capital {
                color: gold;
            }
        }
    }
`;

export const Circle = styled.div<{ radius: number }>`
    position: absolute;
    top: 0;
    ${(props) => props.theme.left(0)}
    transform: translate(${(props) =>
        props.theme.isRtl ? '50%' : '-50%'}, -50%);
    width: ${(props) => props.radius * 2}px;
    height: ${(props) => props.radius * 2}px;
    border-radius: 50%;
    transition: all 500ms ease-in-out;
    background-image: radial-gradient(
        #ffffff22 0%,
        transparent 20%,
        #ffffff22 30%,
        #ffffff33 45%,
        #ffffff33 55%,
        transparent 70%
    );
    opacity: 1;
`;

export const IconWrapper = styled.div`
    font-size: 18px;
    position: relative;
    top: 2px;
`;

export const ShortKey = styled.div`
    color: #556;
`;

export const PointText = styled.div`
    flex: 1;
    margin: 0 15px;

    span {
        &.capital {
            color: #ff77a4;
        }
    }
`;
