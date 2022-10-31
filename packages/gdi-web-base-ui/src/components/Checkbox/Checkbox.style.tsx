import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Content = styled.div`
    ${(props) => props.theme.paddingRight('10px')}
    position: relative;
    bottom: 3px;
`;
