import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 35px 15px 10px;
`;

export const Empty = styled.div`
    font-size: 40px;
    font-weight: 100;
    flex: 1;
    margin-bottom: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 7px rgba(0, 0, 0, 1);
    opacity: 0.15;
`;

export const DetailsLine = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    opacity: 0.5;
`;

export const Estimation = styled.div``;
