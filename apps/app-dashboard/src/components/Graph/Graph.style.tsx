import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
`;

export const Bar = styled.div`
    width: 6px;
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 4px;
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const BarInner = styled.div`
    width: 6px;
    border-radius: 4px;
    background-color: palevioletred;
    height: 1%;
`;
