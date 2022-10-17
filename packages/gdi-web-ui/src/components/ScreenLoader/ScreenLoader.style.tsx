import styled from 'styled-components';

export const Container = styled.div<{ transparent?: boolean }>`
    background-color: ${(props) =>
        props.transparent ? 'transparent' : '#334'};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
