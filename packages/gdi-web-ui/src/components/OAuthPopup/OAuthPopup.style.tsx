import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Details = styled.div`
    margin: 40px 0 80px;
`;

export const Paragraph = styled.div`
    font-size: 40px;
    color: #dde;
`;

export const Suggestion = styled.div`
    margin-top: 20px;
    font-size: 30px;
    color: #889;
    font-weight: 200;
    text-align: center;
`;

export const OkIcon = styled.div`
    background-color: yellowgreen;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`;

export const ErrorIcon = styled.div`
    background-color: red;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`;
