import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Squares = styled.div<{ color: string }>`
    background-color: ${(props) => props.color};
    border-radius: 8px;
    box-shadow: inset 1px -3px 10px 2px rgba(0, 0, 0, 0.2);
    border: 1px solid #333;
    ${(props) => props.theme.borderLeft('none')}
`;

export const DayHeaderContainer = styled.div<{ color: string }>`
    border: 2px solid #333;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 0 20px;
    border-radius: 8px 8px 0 0;
    box-shadow: inset 1px -3px 3px 0 rgba(0, 0, 0, 0.3);
    background-color: #bbb;
    border-bottom: none;
    font-weight: bold;
    color: #555566dd;
    background-color: ${(props) => props.color};
`;
