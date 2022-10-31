import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 30px;
    color: white;
`;

export const Group = styled.div``;

export const GroupTitle = styled.h2`
    color: white;
    text-align: center;
    font-size: 40px;
    font-weight: 200;
`;

export const GroupContent = styled.div`
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(90, 1fr);
    height: 2500px;
`;

export const Panel = styled.div`
    flex: 1;
    display: flex;
    box-shadow: inset 0 0 1px 5px rgba(0, 0, 0, 0.2);
    background-color: #223;
    flex-direction: column;

    h2 {
        ${(props) => props.theme.marginLeft('20px')}
        position: relative;
        top: 15px;
        color: #99a;
        font-weight: 300;
    }

    &:nth-child(1) {
        grid-area: 1 / 1 / 30 / 80;
    }

    &:nth-child(2) {
        grid-area: 30 / 1 / 60 / 80;
    }

    &:nth-child(3) {
        grid-area: 60 / 1 / 90 / 80;
    }

    &:nth-child(4) {
        grid-area: 1 / 80 / 30 / 100;
    }

    &:nth-child(5) {
        grid-area: 30 / 80 / 60 / 100;
    }

    &:nth-child(6) {
        grid-area: 60 / 80 / 90 / 100;
    }
`;

export const Json = styled.div``;
