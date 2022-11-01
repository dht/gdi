import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    ${(props) => props.theme.borderLeft('1px solid #556')}
    overflow-x: auto;
`;
