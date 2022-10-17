import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Top = styled.div`
    height: 25vh;
    background-color: rgba(255, 0, 0, 0.05);
    position: relative;
    background-image: linear-gradient(
        45deg,
        rgba(255, 0, 0, 0) 0%,
        rgba(255, 217, 0, 0.1) 100%
    );
`;

export const Details = styled.div`
    position: absolute;
    bottom: -50px;
    left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Me = styled.div`
    margin-left: 40px;
    margin-bottom: 15px;
`;

export const Content = styled.div`
    flex: 1;
    padding: 150px 50px;
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    flex: 1;

    &:first-child {
        max-width: 200px;
    }
`;

export const TotalCount = styled.div`
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 300;
`;

export const TotalSize = styled.div`
    font-size: 20px;
    font-weight: 200;
    color: gold;
`;

export const Apps = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    display: table;
    width: 800px;
`;

export const AppRow = styled.div`
    display: table-row;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const AppField = styled.div<{ color?: string }>`
    display: table-cell;
    padding: 5px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.color || '#ccd'};
`;

export const Color = styled.div<{ value: string }>`
    background-color: ${(props) => props.value};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
        inset 0 0 2px 4px rgba(0, 0, 0, 0.2);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
        );
    }
`;
