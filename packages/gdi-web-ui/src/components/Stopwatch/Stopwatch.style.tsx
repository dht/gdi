import styled from 'styled-components';

export const Container = styled.div`
    --size: 0.6px;
    --width: calc(var(--size) * 40);
    --height: calc(var(--size) * 60);
    --shadow-1: calc(var(--size));
    --shadow-2: calc(var(--size) * 2);
    --shadow-3: calc(var(--size) * 3);
    --shadow-10: calc(var(--size) * 10);

    flex: 1;
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: calc(var(--width) / 2) calc(var(--height) / 6);
`;

export const DigitContainer = styled.div`
    width: var(--width);
    height: var(--height);
    position: relative;
    margin: calc(var(--height) / 20) calc(var(--width) / 4);
`;

export const EdgeContainer = styled.div`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: inset 0 0 var(--shadow-1) var(--shadow-1) rgba(0, 0, 0, 0.8),
        0 0 var(--shadow-2) var(--shadow-3) rgba(0, 0, 0, 1);
    border-radius: calc(var(--size) * 5);
    width: calc(var(--width) / 40 * 27);
    height: calc(var(--height) / 60 * 4);
    position: absolute;
    opacity: 0.15;

    &.on {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 var(--shadow-1) var(--shadow-1) rgba(255, 255, 255, 0.8),
            0 0 var(--shadow-2) var(--shadow-3) rgba(0, 0, 0, 0.4),
            0 0 var(--shadow-10) rgba(255, 255, 255, 0.8);
    }

    &:nth-child(1) {
        top: -6%;
        ${(props) => props.theme.left('10%')}
    }

    &:nth-child(2) {
        top: 47%;
        ${(props) => props.theme.left('10%')}
    }

    &:nth-child(3) {
        top: 100%;
        ${(props) => props.theme.left('10%')}
    }

    &:nth-child(4) {
        transform: rotate(90deg);
        transform-origin: 0 0;
    }

    &:nth-child(5) {
        transform: rotate(90deg);
        transform-origin: 0 0;
        ${(props) => props.theme.left('100%')}
    }

    &:nth-child(6) {
        transform: rotate(90deg);
        transform-origin: 0 0;
        ${(props) => props.theme.left('50%')}
    }

    &:nth-child(7) {
        transform: rotate(90deg);
        transform-origin: 0 0;
        ${(props) => props.theme.left('100%')}
        top: 50%;
    }
`;

export const UnitContainer = styled.div`
    font-family: monospace;
    color: rgba(255, 255, 255, 0.8);
    font-size: calc(var(--width) / 40 * 34);
    text-shadow: var(--shadow-1) var(--shadow-1) var(--shadow-10)
            rgba(255, 255, 255, 0.3),
        var(--shadow-1) var(--shadow-1) var(--shadow-10) rgba(0, 0, 0, 1);
`;
