import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 140px;
    max-width: 500px;
`;

export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 1.5;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0 0;

    > button {
        margin: 5px;
    }
`;

export const Content = styled.div`
    flex: 1;
`;

export const A = styled.a`
    margin-left: 10px;
    color: #cdaf08;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: gold;
    }
`;

export const Url = styled.div``;
