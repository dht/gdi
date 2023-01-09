import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    min-width: calc(100% / 6);
`;

export const Image = styled.img`
    width: 100%;
`;
