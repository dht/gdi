import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid #ccc;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
    border-radius: 40px;
    width: 350px;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px;
`;

export const Input = styled.input`
    height: 100%;
    flex: 1;
    border: none;
    border-radius: 40px;
    padding-left: 20px;
    outline: none;

    ::placeholder {
        color: #ccc;
    }
`;

export const Cta = styled.button`
    background-color: #334;
    color: white;
    border: none;
    border-radius: 40px;
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-right: 12px;
`;
