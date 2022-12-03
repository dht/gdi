import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 1000px;
    min-height: 700px;
`;

export const Content = styled.div`
    margin-top: 20px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 25px 10px;

    button {
        ${(props) => props.theme.marginRight('10px')}
    }
`;

export const ErrorWrapper = styled.div`
    flex: 1;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 18px;
`;
