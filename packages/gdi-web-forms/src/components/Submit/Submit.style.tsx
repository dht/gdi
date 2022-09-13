import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        zoom: 1.7;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 18px 10px;

    > button {
        margin-left: 10px;
    }
`;

export const Agreements = styled.div``;

export const Agreement = styled.div`
    margin: 0 0 10px 5px;

    a.agreement-link {
        color: #62bdbd;
        display: inline-block;
        margin: 0 2px;
    }
`;

export const Span = styled.span``;

export const Link = styled.a``;
