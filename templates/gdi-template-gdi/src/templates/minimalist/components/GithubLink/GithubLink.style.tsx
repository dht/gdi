import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    cursor: pointer;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #334;

    &:hover {
        color: #556;
    }
`;
