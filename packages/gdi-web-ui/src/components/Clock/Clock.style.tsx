import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-size: 40px;
    direction: ltr;
`;

export const Hours = styled.div`
    font-weight: bold;
`;

export const Divider = styled.div`
    font-size: 24px;
`;

export const Minutes = styled.div``;

export const Digit = styled.div``;

export const AmPm = styled.div`
    color: rgba(255, 255, 255, 0.3);
    font-size: 20px;
    ${(props) => props.theme.paddingLeft('3px')}
    font-weight: 500;
`;
