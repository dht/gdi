import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const DateDate = styled.div`
    font-size: 22px;
    color: #b12855;
    background-color: gold;
    padding: 3px 7px;
    border-radius: 10px;
    box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.1);
`;

export const DateDelta = styled.div`
    background-color: rgba(0, 40, 40, 0.8);
    font-size: 14px;
    padding: 2px 5px;
    margin-top: 5px;
    border-radius: 3px;
`;

export const Title = styled.div<{
    large?: boolean;
    center?: boolean;
    floatRight?: boolean;
    floatLeft?: boolean;
}>`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2px 15px;
    border-radius: 5px;
    font-size: ${(props) => (props.large ? '24px' : '17px')};
    white-space: nowrap;
    text-align: 
    border: 1px solid transparent;
    text-align: ${(props) => (props.center ? 'center' : 'inherit')};
    ${(props) => (props.floatRight ? props.theme.floatRight() : '')}
    ${(props) => (props.floatLeft ? props.theme.floatLeft() : '')}
`;

export const Select = styled.div<{ center?: boolean }>`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2px 15px;
    border-radius: 5px;
    font-size: 17px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid transparent;
    text-align: ${(props) => (props.center ? 'center' : 'auto')};
    ${(props) => props.theme.floatRight()}

    &:hover {
        border: 1px solid dodgerblue;
    }

    &.status {
        &.draft {
            background-color: rgba(255, 255, 255, 0.1);
        }

        &.production {
            background-color: goldenrod;
            color: #333;
        }

        &.archived {
            background-color: rgba(255, 255, 255, 0.1);
            color: #777;
        }
    }
`;
