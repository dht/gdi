import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${(props) => props.theme.direction()}
`;

export const Content = styled.div`
    background-color: #223;
    flex: 1;
    display: flex;
`;
