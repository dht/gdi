import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 34px;
`;

export const Option = styled.div<{ selected: boolean }>`
    flex: 1;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    color: ${(props) => (props.selected ? 'gold' : '#667')};
    cursor: pointer;
    transition: all 50ms ease-in-out;
    text-align: center;

    &:hover {
        color: ${(props) => (props.selected ? 'gold' : '#aaa')};
    }

    i {
        margin-top: 5px;
    }
`;

export const Bk = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    position: absolute;
    width: 100px;
    height: 33px;
    top: 2px;
    pointer-events: none;
    transition: all 100ms ease-in-out;
`;
