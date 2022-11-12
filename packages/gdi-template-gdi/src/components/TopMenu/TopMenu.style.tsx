import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Link = styled.a`
    color: #334;
    font-size: 20px;
    font-weight: 500;
    margin: 0 30px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
