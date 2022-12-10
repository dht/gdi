import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    padding: 0 15px 20px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    color: #eee;

    &.form {
        padding-bottom: 10px;
    }
`;

export const P = styled.p`
    font-size: 18px;
    flex: 1;
`;

export const Content = styled.div`
    padding-bottom: 30px;

    &.form,
    &.custom {
        padding-bottom: 0;
    }
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

export const Warning = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid orange;
    margin: 20px 0 5px;
    padding: 10px;
    border-radius: 5px;
    color: orange;
    max-width: 500px;
    line-height: 22px;
`;

export const WarningIcon = styled.div`
    font-size: 20px;
    ${(props) => props.theme.marginRight('8px')}
`;

export const WarningText = styled.div`
    font-size: 16px;
`;
