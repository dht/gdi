import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);

    > i,
    > span {
        width: 40px;
        height: 40px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.07);

        &:hover {
            color: gold;
            cursor: pointer;
        }
    }

    > i {
        font-size: 23px;
    }

    > span {
        font-size: 16px;
    }
`;
