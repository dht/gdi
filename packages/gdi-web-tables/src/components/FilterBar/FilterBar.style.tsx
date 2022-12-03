import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
    padding: 0;
    margin: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Flex = styled.div`
    flex: 1;
`;

export const HeaderText = styled.h1`
    ${(props) => props.theme.marginRight('20px')}
`;

export const Count = styled.div`
    min-width: 100px;
`;

export const CountText = styled.div`
    span {
        color: gold;
    }
`;

export const Clear = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: #4db2fb;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const ContainerBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px 0;
    justify-content: space-between;

    > div,
    > button {
        ${(props) => props.theme.marginRight('8px')}
    }
`;

export const ContainerFilter = styled.div`
    height: 300px;
    display: flex;
    transition: all 0.3s ease-in-out;
`;

export const Actions = styled.div``;

export const Tools = styled.div``;
