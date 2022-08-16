import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Breadcrumb = styled.a`
    color: #c13b68;
    padding: 5px 10px;
    border-top: 1.5px solid #c13b68;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const Line = styled.div`
    border-right: 1.5px solid #c13b68;
    transform: rotate(-15deg) translateY(2px);
    height: 21px;
    width: 1px;
`;
