import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Image = styled.img<{ height: number }>`
    height: ${(props) => props.height}px;
`;
