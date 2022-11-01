import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    padding: 30px;
    position: relative;
`;

export const City = styled.div`
    color: rgba(255, 255, 255, 0.7);
    padding-bottom: 5px;
`;

export const Time = styled.div``;

export const CurrentDate = styled.div`
    font-size: 17px;
    line-height: 20px;
`;

export const Temperature = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 24px;

    i {
        ${(props) => props.theme.marginLeft('10px')}
        font-size: 30px;
        color: gold;
    }
`;

export const TemperatureLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Report = styled.div`
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
`;
