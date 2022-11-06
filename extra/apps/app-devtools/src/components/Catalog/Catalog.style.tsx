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
    grid-template-rows: repeat(45, 1fr);
    height: 100vh;
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
        grid-area: 1 / 1 / 40 / 80;
    }

    &:nth-child(2) {
        grid-area: 1 / 80 / 40 / 100;
    }
`;
