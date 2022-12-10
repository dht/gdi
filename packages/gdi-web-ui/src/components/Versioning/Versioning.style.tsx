import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 450px;
    display: flex;
    flex-direction: column;
`;

export const P = styled.p`
    font-size: 15px;
`;

export const Versions = styled.div`
    margin-top: 20px;
`;

export const Version = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 10px;

    &:last-child {
        border-bottom: none;
    }
`;

export const Label = styled.div`
    width: 100px;
`;

export const Content = styled.div`
    margin-top: 10px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 40px;

    button {
        margin-left: 10px;
    }
`;
