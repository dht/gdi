import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 1200px;
`;

export const Editors = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;

    > div {
        position: relative;
        &:nth-child(1) {
            flex: 3;
        }

        &:nth-child(2) {
            flex: 2;
            filter: grayscale();

            &::before {
                content: 'All Possible Properties';
                background-color: green;
                position: absolute;
                top: -15px;
                ${(props) => props.theme.left('50%')}
                width: 160px;
                text-align: center;
                padding: 6px 10px;
                transform: translateX(-50%);
                border-radius: 10px;
                z-index: 999;
            }
        }
    }
`;

export const EmptyContainer = styled.div`
    display: flex;
    flex: 1;
    height: 800px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Column = styled.div`
    width: 250px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 800px;
    overflow-y: auto;

    button {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.02);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0px;
    height: 28px;
    width: 100px;
    right: 50px;
    font-size: 15px;
    color: #aab;

    > button {
        margin: 0 6px;
    }
`;

export const Action = styled.div`
    width: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: gold;
    }
`;
