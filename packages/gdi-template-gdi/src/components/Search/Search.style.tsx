import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Icon = styled.span`
    font-size: 30px;
    cursor: pointer;

    &:hover {
        color: palevioletred;
    }

    &:active {
        position: relative;
        top: 1px;
        left: 1px;
    }
`;
