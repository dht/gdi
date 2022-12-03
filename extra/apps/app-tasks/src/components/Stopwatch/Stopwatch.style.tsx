import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const TimeBig = styled.div`
    color: white;
    font-size: 60px;
    font-weight: 100px;
    font-family: monospace;
`;

export const Unit = styled.div`
    color: white;
    font-size: 24px;
    font-weight: 100px;
    font-family: monospace;
    opacity: 0.3;
    padding: 3px;
    padding-bottom: 8px;
`;

export const Seconds = styled.div`
    color: white;
    font-size: 26px;
    font-weight: 100;
    font-family: monospace;
    padding-bottom: 8px;
    ${(props) => props.theme.paddingLeft('6px')}
    opacity: 0.4;
`;
