import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Row = styled.div<{ index: number }>`
    background-color: ${(props) =>
        props.index % 2 === 0 ? 'rgba(255, 255, 255, 0.03)' : ''};
`;
