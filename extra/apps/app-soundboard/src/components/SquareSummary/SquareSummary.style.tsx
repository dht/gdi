import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 70px;
    height: 130px;
    ${(props) => props.theme.borderLeft('2px solid #333')}
    border-bottom: 2px solid #333;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 16px;
    color: #778;
    text-align: center;
    margin-top: 5px;
`;

export const ChartWrapper = styled.div`
    width: 80px;
    margin: auto;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
