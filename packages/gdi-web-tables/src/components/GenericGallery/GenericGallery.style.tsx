import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`;

export const Content = styled.div`
    flex: 1;
    overflow: auto;
    max-height: calc(100vh - 80px);
    display: flex;
`;
