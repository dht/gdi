import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Header = styled.div`
    padding: 25px 25px 15px;
`;

export const Link = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: cyan;

    &:hover {
        text-decoration: underline;
    }
`;
