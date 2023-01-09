import styled from 'styled-components';

export const Wrapper = styled.div<{ rotation?: number }>`
    flex: 1;

    transform: rotate(${(props) => props.rotation}deg);
`;

export const Image = styled.img`
    width: 170px;
`;
