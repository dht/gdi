import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    user-select: none;
`;

export const Trigger = styled.div`
    position: absolute;
    width: 50px;
    height: 40px;
    border-radius: 30px;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 500ms ease-out;
    border: 1px solid #db709465;

    &:hover {
        border: 1px solid palevioletred;
    }

    &:active {
        background-color: palevioletred;
    }
`;

export const Point = styled.div`
    position: absolute;
    transition: all 100ms ease-out;
    top: 0;
    left: 0;
    width: 3px;
    height: 3px;
`;

export const PointInner = styled.div`
    background-color: #112;
    padding: 5px 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 1px solid #334;
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
        right: 0;
        flex-direction: row-reverse;
    }

    &.topRight {
        bottom: 0;
        left: 0;
    }

    &.bottomLeft {
        top: 0;
        right: 0;
        flex-direction: row-reverse;
    }

    &.bottomRight {
        top: 0;
        left: 0;
    }

    &:hover {
        background-color: #e2326d;

        .key {
            color: gold;
        }
    }

    &:active,
    &.keyboardOn {
        transform: translateX(2px) translateY(-2px);
        background-color: #e92667;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;

export const Circle = styled.div`
    position: absolute;
    top: 15px;
    left: 30px;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: transparent;
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
