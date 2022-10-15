import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 5px;
    background-color: transparent;
    display: flex;

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

export const Groups = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Group = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    &:nth-child(2) {
        justify-content: flex-end;
    }
`;

export const Row = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    &:nth-child(2) {
        align-items: flex-end;
    }
`;
