import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 0 15px 20px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
`;

export const P = styled.p`
    font-size: 18px;
    flex: 1;
`;

export const Content = styled.div`
    padding-bottom: 30px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    > button {
        margin: 0 5px;
    }
`;
