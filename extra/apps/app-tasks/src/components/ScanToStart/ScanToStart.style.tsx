import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;

    .icon {
        font-size: 60px;
    }
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.div`
    margin-bottom: 20px;
    font-size: 22px;
    opacity: 0.7;
`;

export const Sync = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    i {
        cursor: pointer;
        position: relative;

        &:hover {
            color: gold;
        }

        &:active {
            bottom: 1px;
            left: 1px;
        }
    }
`;
