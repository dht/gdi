import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 5px;
    background-color: transparent;

    &.selected {
        &:after {
            border: 3px solid gold;
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            bottom: -4px;
            right: -4px;
        }

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: 0.2;
            background: repeating-linear-gradient(
                -45deg,
                goldenrod,
                goldenrod 10px,
                gold 10px,
                gold 20px
            );
        }
    }

    &.deleted {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: 0.4;
            background: repeating-linear-gradient(
                -45deg,
                red,
                red 10px,
                darkred 10px,
                darkred 20px
            );
        }
    }
`;

export const TagsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 70px;
`;

export const Title = styled.div`
    position: absolute;
    padding: 3px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const Icons = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 7px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Asterisk = styled.div`
    color: gold;
    width: 25px;
    text-align: center;
`;

export const Temporary = styled.div`
    color: palevioletred;
    width: 25px;
    text-align: center;
`;

export const Selected = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: 1px solid #334;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    background-color: gold;
    box-shadow: inset 0 0 3px 2px rgba(0, 0, 0, 0.3);
    color: #334;

    > i {
        position: relative;
        bottom: 2px;
        left: 1px;
    }
`;
