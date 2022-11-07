import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const DateDate = styled.div`
    font-size: 22px;
    color: #b12855;
    background-color: gold;
    padding: 3px 7px;
    border-radius: 10px;
    box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.1);
`;

export const DateDelta = styled.div`
    background-color: rgba(0, 40, 40, 0.8);
    font-size: 14px;
    padding: 2px 5px;
    margin-top: 5px;
    border-radius: 3px;
`;

export const Title = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 15px;
    white-space: nowrap;
`;

export const TitleLarge = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 30px;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
`;
