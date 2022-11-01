import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
        ${(props) => props.theme.marginRight('15px')}
    }
`;
