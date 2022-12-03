import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    margin: 5px 5px 15px;
`;

export const Knob = styled.div`
    width: 50px;
    height: 50px;
    background: rgb(34, 34, 51);
    background: radial-gradient(circle, #2f2f46 0%, rgba(51, 51, 68, 1) 100%);
    border-radius: 30px;
    border: 1px solid #556;
    box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.3),
        2px 2px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    cursor: pointer;
    user-select: none;

    &:hover {
        .dot {
            background-color: gold;
        }
    }
`;

export const DialLine = styled.div`
    width: 5px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    ${(props) => props.theme.left('-10px')}
    top: 50%;
    position: absolute;
`;

export const Dial = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    ${(props) => props.theme.left(0)}

    --degrees: 21deg;
    --degrees-delta: 17deg;

    &:nth-child(1) {
        transform: rotate(calc(-2 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(2) {
        transform: rotate(calc(-1 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(3) {
        transform: rotate(calc(0 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(4) {
        transform: rotate(calc(1 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(5) {
        transform: rotate(calc(2 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(6) {
        transform: rotate(calc(3 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(7) {
        transform: rotate(calc(4 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(8) {
        transform: rotate(calc(5 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(9) {
        transform: rotate(calc(6 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(10) {
        transform: rotate(calc(7 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(11) {
        transform: rotate(calc(8 * var(--degrees) + var(--degrees-delta)));
    }
    &:nth-child(12) {
        transform: rotate(calc(9 * var(--degrees) + var(--degrees-delta)));
    }
`;

export const DotWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    transform: rotate(45deg);
`;

export const Dot = styled.div`
    position: absolute;
    width: 7px;
    height: 7px;
    top: 4px;
    ${(props) => props.theme.left('calc(50% - 4px)')}
    border-radius: 4px;
    background-color: white;
    box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.4),
        2px 2px 15px rgba(255, 255, 255, 0.3);
`;

export const Details = styled.div`
    position: relative;
    top: 5px;
    right: 8px;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 13px;
    color: #aab;
    max-width: 70px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const Value = styled.div`
    text-align: center;
    margin-top: 2px;
    font-size: 14px;
    color: #c0a925;
`;
